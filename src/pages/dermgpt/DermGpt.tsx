import React from "react";
import "./DermGpt.css";

const DermGpt: React.FC = () => {
    const url = "https://app-backend-dfbx76tgwktxa.azurewebsites.net/#/";

    return (
        <div className="iframe-container">
            <iframe src={url} title="Embedded Frame" />
        </div>
    );
};

export default DermGpt; 