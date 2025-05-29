import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/derm-gpt-chat");
    };

    return (
        <div className="Home">
            <div className="content">
                {/* <p className="subtitle">
          DermGPT
          <br />
          Is the only advanced AI powered tool specializing in dermatology.
          <br />
          DermGPT allows dermatologists to ask questions in natural language and
          receive relevant, helpful answers – just like they would with real-life
          colleagues.
          <br />
          We now have access to the complete National Library of Medicine,
          expanding our knowledge base to over 60,000 dermatology articles.
        </p> */}
                <button className="access-button" onClick={handleButtonClick}>
                    Access DermGPT
                </button>
            </div>
        </div>
    );
};

export default Home; 