import React, { useState } from "react";
import "./DermGpt.css";

const DermGpt: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const url = "https://capps-backend-46rde5d4cdkug.gentlegrass-bcb11f25.eastus2.azurecontainerapps.io/";

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="iframe-container">
            {isLoading && (
                <div className="loading-message">
                    Loading...
                </div>
            )}
            <iframe
                src={url}
                title="Embedded Frame"
                onLoad={handleIframeLoad}
                style={{ display: isLoading ? 'none' : 'block' }}
            />
        </div>
    );
};

export default DermGpt; 