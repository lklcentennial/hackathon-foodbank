"use client";
import React, { useState } from "react";

function Validation(){
  const [file, setFile] = useState(null);
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; 
    setIsSuccess(false)

    // Check the file type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedTypes.includes(selectedFile?.type)) {
      setIsError(true)
      setErrorMsg("Only JPEG, PNG, and GIF images are allowed.");
      return;
    }

    setIsError(false)
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(isError) return
    setErrorMsg("");

    // Check if the file has been selected
    if (!file) {
      setIsError(true)
      setErrorMsg("Please select a file.");
      return;
    }

    setIsError(false)
    setIsSuccess(true)
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="text-xl font-bold mb-4">File Type Validation</div>

        <div className="mb-4">
          <form onSubmit={handleSubmit}>
            <input className="border rounded p-2 w-full" type="file" onChange={handleFileChange}/>
            {isError && <div className="text-red-500 mt-2">{errorMsg}</div>}
            <button className="bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700" type="submit">
              Upload
            </button>
            {isSuccess && <div className="text-green-500 mt-2">Valid File Type</div>}
          </form>
    </div>
  </div>
</div>
  )
}

// const FlexContainer = ({ children }) => {
//   return (
//     <div className={m-4 flex flex-col}>
//       <h1>this is flex</h1>
//     </div>
//   );
// };

export default Validation;