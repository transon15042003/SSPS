import React, { createContext, useContext, useState } from "react";

// Tạo context
export const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
    const [files, setFiles] = useState([]);

    // Hàm để upload file
    const uploadFile = (file) => {
        setFiles((prevFiles) => [...prevFiles, file]);
    };

    // Hàm để xóa file
    const removeFile = (fileName) => {
        setFiles((prevFiles) =>
            prevFiles.filter((file) => file.name !== fileName)
        );
    };

    return (
        <UploadContext.Provider value={{ files, uploadFile, removeFile }}>
            {children}
        </UploadContext.Provider>
    );
};

export const useUpload = () => {
    const context = useContext(UploadContext);
    if (!context) {
        throw new Error("useUpload must be used within a UploadProvider");
    }
    return context;
};
