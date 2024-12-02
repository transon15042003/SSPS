import { useEffect, useState } from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import fileupload_bg from "../../assets/img/fileupload_bg1.jpg";
import "../../assets/styles/FileUpload.css";
import FileCards from "./FileCard";
import UploadArea from "./UploadArea";

function FileUpload({ id }) {
    const bg = {
        backgroundImage: `url(${fileupload_bg})`,
        height: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxHeight: "80vh",
    };

    const [length, setLength] = useState(0);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const storedFiles = localStorage.getItem("files");
        if (storedFiles) {
            setFiles(JSON.parse(storedFiles));
            setLength(JSON.parse(storedFiles).length);
        }
    }, [length]);

    return (
        <div
            className="position-relative mx-auto shadow-lg"
            style={bg}
            id="file-upload"
        >
            <ProgressiveImage src={fileupload_bg}>
                {(src, loading) => (
                    <img
                        className={`image${loading ? " loading" : " loaded"}`}
                        src={src}
                        alt="File Upload Background"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            visibility: "hidden",
                        }}
                        draggable="false"
                    />
                )}
            </ProgressiveImage>
            <div
                className="container-fluid position-absolute top-50 start-50 translate-middle rounded-4 shadow-lg"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    width: "85%",
                    height: "85%",
                    padding: "2rem",
                }}
            >
                <div className="row h-100">
                    <div className="col-12">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <div className="text-center">
                                <h2 className="display-6 fw-bold mb-2">
                                    Tải tài liệu
                                </h2>
                                <p className="text-muted fs-5">
                                    Tải tài liệu bạn muốn in
                                </p>
                            </div>
                        </div>

                        <div className="row h-75">
                            <div
                                className={`${
                                    files.length === 0 ? "col-12" : "col-7"
                                } h-100 d-flex align-items-center justify-content-center`}
                            >
                                <UploadArea setLength={setLength} />
                            </div>

                            {files.length !== 0 && (
                                <div className="col-5 h-100">
                                    <div className="card h-100 border-0 bg-light">
                                        <div className="d-flex flex-column card-body">
                                            <h5 className="card-title fw-bold mb-3">
                                                Tài liệu đã tải lên
                                            </h5>
                                            <div
                                                className="d-flex flex-column justify-content-between overflow-auto"
                                                style={{
                                                    maxHeight:
                                                        "calc(100% - 40px)",
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <FileCards files={files} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileUpload;
