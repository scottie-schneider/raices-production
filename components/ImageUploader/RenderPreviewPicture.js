import React, { useState, useEffect } from "react";
import firebase from "../../util/firebase.js";

// Render component
const RenderPreviewPicture = (
  { picture: { file, dataURL } },
  index,
  deletePicture
) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const photoRef = storageRef
    .child(`images/`)
    .child(`homeImages/123x456/${file.name}`);
  const [uploading, setUploading] = useState(true);

  const deleteImage = () => {
    // delete from storage
    photoRef
      .delete()
      .then(function () {
        console.log("deleted!");
      })
      .catch(function (error) {
        console.log("error");
      });
  };

  useEffect(() => {
    try {
      const uploadTask = photoRef.put(file);
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        function (snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
        },
        function (error) {
          // Handle unsuccessful uploads
        },
        function () {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);
          });
          console.log(uploadTask.snapshot);
          setUploading(false);
        }
      );
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div key={index}>
      <button onClick={deleteImage}>delete</button>
      <img src={dataURL} />
      {uploading ? "Loading...." : "DONE"}
    </div>
  );
};

export default RenderPreviewPicture;
