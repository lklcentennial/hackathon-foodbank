"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Validation() {
  const [files, setFiles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    let isValid = true;
    const newFiles = Array.from(selectedFiles).map((file) => {
      if (!allowedTypes.includes(file.type)) {
        isValid = false;
        setIsError(true);
        setErrorMsg(`Invalid file type: ${file.name}`);
      }
      return { file, progress: 0 };
    });

    if (isValid) {
      setIsError(false);
      setErrorMsg("");
      setFiles([...files, ...newFiles]);
    }
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setIsSuccess(true);
        setTimeout(() => {
          setFiles([]);
          setIsSuccess(false);
          setUploadProgress(0);
        }, 2000); // Reset state after 2 seconds
      }
    }, 500); // Simulated upload progress interval (500ms per 10% progress)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isError || files.length === 0) {
      setIsError(true);
      setErrorMsg("Please select valid file(s) to upload.");
      return;
    }

    setIsError(false);
    setErrorMsg("");
    setUploadProgress(0);

    simulateUpload();
  };

  const router = useRouter();

  return (
    <div className="container mx-auto w-1/2 p-4">
      <div className="bg-gray-100 shadow-lg rounded-lg p-6">
        <div className="text-xl font-bold mb-4">Upload required documents</div>
        <div className="mb-4 flex flex-col">
          <form onSubmit={handleSubmit}>
            <input
              className="border rounded p-2 w-1/2"
              type="file"
              onChange={handleFileChange}
              multiple
            />
            {isError && <div className="text-red-500 mt-2">{errorMsg}</div>}
            <button
              className="bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700"
              type="submit"
            >
              Upload
            </button>
            {isSuccess && (
              <div className="text-green-500 mt-2">Successful uploaded</div>
            )}
          </form>
        </div>
        <div className="mt-4">
          {files.map((uploadedFile, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-2 rounded mb-2"
            >
              <div>{uploadedFile.file.name}</div>
              <div className="flex items-center space-x-2">
                {/* <div className="text-xs">{uploadedFile.progress}%</div> */} 
                <button
                  onClick={() => handleDeleteFile(index)}
                  className="text-red-500 hover:underline"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="mt-4">
            <div
              className="bg-green-500 h-2 rounded"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}
        {uploadProgress === 100 && (
          <button
            className="border text-slate-300 text-xl font-bold m-2 p-4 rounded bg-slate-700 outline-none"
            onClick={() => router.push("/dashboard")}
          >
            Procced
          </button>
        )}
      </div>
    </div>
  );
}

export default Validation;
