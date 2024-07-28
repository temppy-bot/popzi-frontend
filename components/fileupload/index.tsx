import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onUpload: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const openFileDialog = () => {
    const inputElement = document.querySelector('input[type="file"]');
    if (inputElement) {
      (inputElement as HTMLInputElement).click();
    }
  };

  return (
    <div className="w-full h-[400px]">
      <div
        {...getRootProps()}
        className={`flex flex-col items-center gap-4 justify-center w-full h-full border-2 border-dotted rounded-lg p-4 ${
          isDragActive ? 'border-blue-400' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <Image
                            src="/file-upload.png"
                            alt="Toggle Sidebar"
                            width={40}
                            height={40}
                            objectFit='contain'
                        />
     
          <>
          <p className="text-lightergreen font-[400] font-fpublic  text-sm">Drop file here, or</p>

            <button
              onClick={openFileDialog}
              className=" flex px-4 py-2 gap-3 items-center font-[400] font-fpublic  text-sm text-bgred rounded-lg bg-transparent border border-bgred"
            >
                   <Image
                            src="/ic_round-upload.png"
                            alt="Toggle Sidebar"
                            width={20}
                            height={20}
                            objectFit='contain'
                        />
             <p> Browse Files</p>
            </button>
          </>
      
      </div>
      <div className="mt-4 w-full">
        {files.length > 0 && (
          <ul>
            {files.map((file) => (
              <li key={file.name} className="text-gray-600">
                {file.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
