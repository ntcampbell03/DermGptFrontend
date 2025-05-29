import React from "react";
import "./DermGpt.css";

const DermGpt: React.FC = () => {
    const url = "https://capps-backend-46rde5d4cdkug.gentlegrass-bcb11f25.eastus2.azurecontainerapps.io/";

    return (
        <div className="iframe-container">
            <iframe src={url} title="Embedded Frame" />
        </div>
    );
};

export default DermGpt; 