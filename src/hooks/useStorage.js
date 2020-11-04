////
// This hook uploads the file given to him. Also sets the progress-bar, returns progress url and the error if there is one.
////
// import { getDefaultNormalizer } from "@testing-library/react";
import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    // creates file.name reference in the storage, so when the file is uploaded it has the name.
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    //listens to state change, gets percentage and sets it to progress
    // gets error and sets it to error
    // gets url and sets it to url as well
    //snap is a snapshot before the state is changed and it has its parameters like totalBytes and such.
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        //gets url when ready
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        //creates and populates collection
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
