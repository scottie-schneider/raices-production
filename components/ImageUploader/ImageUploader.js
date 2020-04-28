import React, { useState, useRef, useEffect } from "react";
import firebase from "../../util/firebase.js";
import Spinner from "../LoadingSpinner/Spinner";
// Render component
const RenderPreviewPicture = ({
  picture: { file, dataURL },
  index,
  deletePicture,
}) => {
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
    deletePicture(file.name);
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
          console.log("error!");
          console.log(error);
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
    <div className="min-h-233px bg-gray-100 max-w-screen-sm relative flex justify-center items-center  rounded  my-4 mx-4">
      <div className=" absolute top-2 left-2 flex justify-center items-center">
        {uploading && <Spinner />}
        {!uploading && (
          <div
            onClick={deleteImage}
            className="bg-black opacity-50 rounded-full h-10 w-10 border border-white flex justify-center items-center"
          >
            <svg
              className="fill-current text-white h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
            </svg>
          </div>
        )}
      </div>
      <img className="min-h-full" src={dataURL} />
    </div>
  );
};

const ERROR = {
  NOT_SUPPORTED_EXTENSION: "NOT_SUPPORTED_EXTENSION",
  FILESIZE_TOO_LARGE: "FILESIZE_TOO_LARGE",
};

const ImageUploader = ({
  imgExtension = [".jpg", ".gif", ".png", ".gif"],
  maxFileSize = 5242880,
  singleImage = false,
}) => {
  const [pictures, setPictures] = useState([]);
  const [fileErrors, setFileErrors] = useState([]);
  const [files, setFiles] = useState([]);
  /*
	 Check file extension (onDropFile)
	 */
  const hasExtension = (fileName) => {
    const pattern = "(" + imgExtension.join("|").replace(/\./g, "\\.") + ")$";
    return new RegExp(pattern, "i").test(fileName);
  };

  const deletePicture = (name) => {
    const updatedPictures = pictures.filter((picture) => picture.name === name);
    setPictures((p) => updatedPictures);
  };

  const onDropFile = (e) => {
    const files = e.target.files;
    console.log("files");
    console.log(files);
    const allFilePromises = [];
    const fileErrors = [];

    // Iterate over all uploaded files
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      let fileError = {
        name: file.name,
      };
      // Check for file extension
      if (!hasExtension(file.name)) {
        fileError = Object.assign(fileError, {
          type: ERROR.NOT_SUPPORTED_EXTENSION,
        });
        fileErrors.push(fileError);
        continue;
      }
      if (file.size > maxFileSize) {
        fileError = Object.assign(fileError, {
          type: ERROR.FILESIZE_TOO_LARGE,
        });
        fileErrors.push(fileError);
        continue;
      }
      allFilePromises.push(readFile(file));
    }
    setFileErrors(fileErrors);

    Promise.all(allFilePromises).then((newFilesData) => {
      console.log("new files data is");
      console.log(newFilesData);
      const dataURLs = singleImage ? [] : pictures.slice();
      // add in the name to the photos
      setPictures((p) => [...p, ...newFilesData]);
    });
  };

  const onUploadClick = (e) => {
    e.target.value = null;
  };

  /*
     Read a file and return a promise that when resolved gives the file itself and the data URL
   */
  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      // Read the image via FileReader API and save image result in state.
      reader.onload = function (e) {
        // Add the file name to the data URL
        let dataURL = e.target.result;
        dataURL = dataURL.replace(";base64", `:name=${file.name};base64`);
        resolve({ file, dataURL });
      };

      reader.readAsDataURL(file);
    });
  };

  /*
   Remove the image from state
   */

  const removeImage = (picture) => {
    const removeIndex = pictures.findIndex((e) => e === picture);
    const filteredPictures = pictures.filter(
      (e, index) => index !== removeIndex
    );
    const filteredFiles = files.filter((e, index) => index !== removeIndex);

    setPictures((p) => filteredPictures);
  };

  /*
   Check if any errors && render
   */

  const renderErrors = () => {
    return fileErrors.map((fileError, index) => {
      return (
        <div key={index} className="bg-red-100">
          * {fileError.name}
        </div>
      );
    });
  };

  /*
   Render preview images
   */
  const renderPreview = () => {
    return (
      <div className="uploadPicturesWrapper">
        <FlipMove enterAnimation="fade" leaveAnimation="fade" style={styles}>
          {this.renderPreviewPictures()}
        </FlipMove>
      </div>
    );
  };

  /*
   On button click, trigger input file to open
   */
  const triggerFileUpload = () => {
    inputElement.click();
  };

  const clearPictures = () => {
    setPictures([]);
  };
  const renderPreviewPictures = () => {
    return pictures.map((picture, index) => {
      return (
        <div key={index} className="uploadPictureContainer">
          <div
            className="deleteImage"
            onClick={() => this.removeImage(picture)}
          >
            X
          </div>
          <img src={picture} className="uploadPicture" alt="preview" />
        </div>
      );
    });
  };
  useEffect(() => {
    // run on change handler!
  }, [pictures]);
  let inputElement = useRef(null);
  return (
    // file uploader
    <div className="bg-white flex flex-col flex-grow flex-shrink-0 relative  h-full">
      {/* Image Preview */}
      <div className="flex flex-col flex-grow  h-full">
        {pictures.map((picture, index) => (
          <RenderPreviewPicture
            picture={picture}
            index={index}
            deletePicture={deletePicture}
          />
        ))}
        <div className="min-h-233px max-w-screen-sm relative flex justify-center items-center border-2 border-dashed rounded  my-4 mx-4">
          <div className="absolute top-0 left-0 flex justify-center items-center">
            <div className="rounded-full h-10 w-10 border bg-transparent border-white flex justify-center items-center">
              <svg
                className="fill-current text-white h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* Upload SVG */}
            <svg
              className="fill-current h-6 w-6 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11 9l-3-3-6 6h16l-5-5-2 2zm4-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
            <span className="mt-3 text-gray-400 font-semibold">
              {pictures.length == 0 ? "Add some pictures" : "Add another"}
            </span>
          </div>
          {/* Error container */}
          <div className="bg-red-100"></div>
          {/* Button */}

          <div
            onClick={triggerFileUpload}
            className="absolute top-0 left-0 w-full h-full bg-transparent focus:outline-none"
          ></div>
          <input
            type="file"
            multiple={true}
            onChange={(e) => {
              onDropFile(e);
            }}
            onClick={onUploadClick}
            ref={(input) => (inputElement = input)}
            className="opacity-0 absolute left:0 top:0 w-10 z-0"
          />
        </div>
      </div>
    </div>
  );
};
export default ImageUploader;
