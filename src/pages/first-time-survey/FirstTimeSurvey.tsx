import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FirstTimeSurvey.css";
import config from "../../config/Config";
import { useAuth0 } from "@auth0/auth0-react";

interface SurveyData {
    professionalRole: string;
    customRole: string;
    specialty: string;
    customSpecialty: string;
    yearsInPractice: string;
    practiceSetting: string;
    customPracticeSetting: string;
    geographicRegion: string;
    customGeographicRegion: string;
}

const FirstTimeSurvey: React.FC = () => {
    const navigate = useNavigate();
    const { getAccessTokenSilently } = useAuth0();
    const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);
    const [formData, setFormData] = useState<SurveyData>({
        professionalRole: "",
        customRole: "",
        specialty: "",
        customSpecialty: "",
        yearsInPractice: "",
        practiceSetting: "",
        customPracticeSetting: "",
        geographicRegion: "",
        customGeographicRegion: "",
    });

    // Check scroll position to fade scroll indicator
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Calculate distance from bottom
            const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

            // Start fading when within 300px of bottom, fully fade at 50px
            const fadeStart = 300;
            const fadeEnd = 50;

            let opacity = 1;
            if (distanceFromBottom <= fadeStart) {
                if (distanceFromBottom <= fadeEnd) {
                    opacity = 0;
                } else {
                    // Linear fade between fadeStart and fadeEnd
                    opacity = (distanceFromBottom - fadeEnd) / (fadeStart - fadeEnd);
                }
            }

            setScrollIndicatorOpacity(opacity);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const handleInputChange = (field: keyof SurveyData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Submit survey data to the backend
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                    scope: "openid profile email"
                }
            });
            const response = await fetch(`${config.api.baseUrl}/api/surveys/submit/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    "survey_results": formData
                }),
            });

            if (response.ok) {
                console.log("Survey submitted successfully");
                // Navigate to DermGPT chat after successful submission
                navigate("/derm-gpt-chat");
            } else {
                console.error("Failed to submit survey:", response.statusText);
                // Still navigate to chat even if survey submission fails
                navigate("/derm-gpt-chat");
            }
        } catch (error) {
            console.error("Error submitting survey:", error);
            // Still navigate to chat even if there's an error
            navigate("/derm-gpt-chat");
        }
    };

    const handleSkipSurvey = () => {
        navigate("/derm-gpt-chat");
    };

    const isFormValid = () => {
        return formData.professionalRole &&
            formData.geographicRegion &&
            (formData.professionalRole !== "Other" || formData.customRole) &&
            (formData.geographicRegion !== "Other" || formData.customGeographicRegion);
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="first-time-survey">
            {/* Scroll Indicator */}
            <div
                className="scroll-indicator"
                onClick={scrollToBottom}
                style={{ opacity: scrollIndicatorOpacity }}
            >
                <div className="scroll-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span className="scroll-text">Scroll to continue</span>
            </div>

            <div className="survey-container">
                <div className="survey-header">
                    <h1>DermGPT User Registration</h1>
                    <p className="survey-subtitle">
                        Thank you for signing in to DermGPT. Please take a moment to provide the following information to help us personalize your experience.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="survey-form">
                    <div className="form-section">
                        <h2>Professional Information</h2>

                        {/* Professional Role */}
                        <div className="form-group">
                            <label className="form-label">
                                1. Professional Role
                                <span className="required">*</span>
                            </label>
                            <p className="form-description">Please select your primary role:</p>
                            <div className="radio-group">
                                {[
                                    "Physician",
                                    "Physician Assistant",
                                    "Nurse Practitioner",
                                    "Medical Student",
                                    "Resident/Fellow",
                                    "Pharmacist",
                                    "Healthcare Administrator",
                                    "Researcher",
                                    "Patient/Public",
                                    "Other"
                                ].map(role => (
                                    <label key={role} className="radio-label">
                                        <input
                                            type="radio"
                                            name="professionalRole"
                                            value={role}
                                            checked={formData.professionalRole === role}
                                            onChange={(e) => handleInputChange("professionalRole", e.target.value)}
                                        />
                                        <span className="radio-text">{role}</span>
                                        {role === "Other" && formData.professionalRole === "Other" && (
                                            <input
                                                type="text"
                                                className="other-input"
                                                placeholder="Please specify..."
                                                value={formData.customRole}
                                                onChange={(e) => handleInputChange("customRole", e.target.value)}
                                            />
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Specialty */}
                        <div className="form-group">
                            <label className="form-label">2. Specialty (if applicable)</label>
                            <div className="radio-group">
                                {[
                                    "Dermatology",
                                    "Primary Care/Family Medicine",
                                    "Internal Medicine",
                                    "Pediatrics",
                                    "Emergency Medicine",
                                    "Plastic Surgery",
                                    "Oncology",
                                    "Other",
                                    "Not applicable"
                                ].map(specialty => (
                                    <label key={specialty} className="radio-label">
                                        <input
                                            type="radio"
                                            name="specialty"
                                            value={specialty}
                                            checked={formData.specialty === specialty}
                                            onChange={(e) => handleInputChange("specialty", e.target.value)}
                                        />
                                        <span className="radio-text">{specialty}</span>
                                        {specialty === "Other" && formData.specialty === "Other" && (
                                            <input
                                                type="text"
                                                className="other-input"
                                                placeholder="Please specify..."
                                                value={formData.customSpecialty}
                                                onChange={(e) => handleInputChange("customSpecialty", e.target.value)}
                                            />
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Years in Practice */}
                        <div className="form-group">
                            <label className="form-label">3. Years in Practice (if applicable)</label>
                            <div className="radio-group">
                                {[
                                    "In training",
                                    "0-5 years",
                                    "6-10 years",
                                    "11-20 years",
                                    "21+ years",
                                    "Not applicable"
                                ].map(years => (
                                    <label key={years} className="radio-label">
                                        <input
                                            type="radio"
                                            name="yearsInPractice"
                                            value={years}
                                            checked={formData.yearsInPractice === years}
                                            onChange={(e) => handleInputChange("yearsInPractice", e.target.value)}
                                        />
                                        <span className="radio-text">{years}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Practice Setting */}
                        <div className="form-group">
                            <label className="form-label">4. Practice Setting (if applicable)</label>
                            <div className="radio-group">
                                {[
                                    "Academic/Teaching institution",
                                    "Hospital-based",
                                    "Private practice - solo",
                                    "Private practice - group",
                                    "Multi-specialty group",
                                    "Federally Qualified Health Center (FQHC)",
                                    "Government/Military",
                                    "Telehealth",
                                    "Other",
                                    "Not applicable"
                                ].map(setting => (
                                    <label key={setting} className="radio-label">
                                        <input
                                            type="radio"
                                            name="practiceSetting"
                                            value={setting}
                                            checked={formData.practiceSetting === setting}
                                            onChange={(e) => handleInputChange("practiceSetting", e.target.value)}
                                        />
                                        <span className="radio-text">{setting}</span>
                                        {setting === "Other" && formData.practiceSetting === "Other" && (
                                            <input
                                                type="text"
                                                className="other-input"
                                                placeholder="Please specify..."
                                                value={formData.customPracticeSetting}
                                                onChange={(e) => handleInputChange("customPracticeSetting", e.target.value)}
                                            />
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Geographic Region */}
                        <div className="form-group">
                            <label className="form-label">
                                5. Geographic Region
                                <span className="required">*</span>
                            </label>
                            <div className="radio-group">
                                {[
                                    "Northeast US",
                                    "Southeast US",
                                    "Midwest US",
                                    "Southwest US",
                                    "West US",
                                    "Canada",
                                    "Europe",
                                    "Asia",
                                    "Australia/New Zealand",
                                    "Other"
                                ].map(region => (
                                    <label key={region} className="radio-label">
                                        <input
                                            type="radio"
                                            name="geographicRegion"
                                            value={region}
                                            checked={formData.geographicRegion === region}
                                            onChange={(e) => handleInputChange("geographicRegion", e.target.value)}
                                        />
                                        <span className="radio-text">{region}</span>
                                        {region === "Other" && formData.geographicRegion === "Other" && (
                                            <input
                                                type="text"
                                                className="other-input"
                                                placeholder="Please specify..."
                                                value={formData.customGeographicRegion}
                                                onChange={(e) => handleInputChange("customGeographicRegion", e.target.value)}
                                            />
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="privacy-notice">
                        <p>
                            Your information helps us improve DermGPT and provides anonymous aggregate data for our sponsors.
                            This information will never be shared in a way that identifies you personally.
                        </p>
                    </div>

                    <div className="form-actions">
                        <button
                            type="submit"
                            className={`continue-button ${!isFormValid() ? 'disabled' : ''}`}
                            disabled={!isFormValid()}
                        >
                            Continue to DermGPT
                        </button>
                        <button
                            type="button"
                            className="skip-button"
                            onClick={handleSkipSurvey}
                        >
                            Skip Survey
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FirstTimeSurvey; 
