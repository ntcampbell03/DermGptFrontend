import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SLA.css";

const SLA: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    // Prevent auto-scrolling when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sla-container">
            <div className="sla-content">
                <header className="sla-header">
                    <button onClick={handleGoBack} className="back-button">
                        ← Back
                    </button>
                </header>

                <div className="sla-body">
                    <h1>DermGPT Terms of Service and Service Level Agreement</h1>

                    <h2>1. Introduction</h2>
                    <p>Welcome to DermGPT. These Terms of Service ("Terms") govern your access to and use of the DermGPT service, website, and applications (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.</p>

                    <h2>2. Service Description</h2>
                    <p>DermGPT is an artificial intelligence language model focused on dermatology. The Service provides information and suggestions related to dermatological conditions and concerns.</p>

                    <h2>3. Important Disclaimers</h2>
                    <p><strong>NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE:</strong> DermGPT is designed as an informational tool only. The Service is not intended to replace professional medical diagnosis, advice, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.</p>
                    <p><strong>NO DOCTOR-PATIENT RELATIONSHIP:</strong> Use of DermGPT does not create a doctor-patient relationship. The information provided through the Service is general in nature and may not apply to your specific situation.</p>

                    <h2>4. Data Collection and Privacy</h2>
                    <h3>4.1 Prompt Collection</h3>
                    <p>We collect and store user prompts in an anonymous fashion. This means:</p>
                    <ul>
                        <li>Your queries to DermGPT are saved without personally identifiable information</li>
                        <li>We use these anonymized prompts to improve our service, train our models, and enhance accuracy</li>
                        <li>Collected prompts may be reviewed by our team to identify common questions, issues, and areas for improvement</li>
                    </ul>

                    <h3>4.2 No Medical Records</h3>
                    <p>DermGPT does not store medical records and should not be used to transmit protected health information (PHI) as defined by applicable healthcare privacy laws.</p>

                    <h3>4.3 Images</h3>
                    <p>If the Service allows for image uploads (such as photos of skin conditions):</p>
                    <ul>
                        <li>Do not include identifiable features in uploaded images</li>
                        <li>Remove all metadata from images before uploading</li>
                        <li>We recommend cropping images to show only the relevant area of concern</li>
                        <li>Any images uploaded may be stored and used to improve our models</li>
                    </ul>

                    <h2>5. PROTECTED HEALTH INFORMATION AND PRIVACY REQUIREMENTS</h2>
                    <h3>5.1 Prohibition on Sharing Protected Health Information</h3>
                    <p><strong>YOU ARE STRICTLY PROHIBITED FROM SUBMITTING, UPLOADING, OR SHARING ANY PROTECTED HEALTH INFORMATION (PHI) THROUGH THE SERVICE.</strong> This includes but is not limited to:</p>
                    <ul>
                        <li>Patient names, initials, or any identifying information</li>
                        <li>Social Security numbers, medical record numbers, or other unique identifiers</li>
                        <li>Dates of birth, admission dates, discharge dates, or treatment dates</li>
                        <li>Addresses, phone numbers, email addresses, or other contact information</li>
                        <li>Photographs that include faces or other identifying features</li>
                        <li>Insurance information or billing records</li>
                        <li>Any information that could reasonably identify a specific individual</li>
                    </ul>

                    <h3>5.2 HIPAA and Privacy Law Compliance</h3>
                    <ul>
                        <li>DermGPT is not a HIPAA-covered entity and cannot guarantee HIPAA-compliant handling of any information submitted</li>
                        <li>Healthcare providers using this Service must ensure their use complies with HIPAA, state privacy laws, and other applicable regulations</li>
                        <li>By using the Service, you represent that you have not and will not submit any PHI as defined under HIPAA, HITECH Act, or other applicable privacy laws</li>
                    </ul>

                    <h3>5.3 De-Identification Requirements</h3>
                    <p>If you wish to discuss patient cases or scenarios:</p>
                    <ul>
                        <li>Remove all direct identifiers before submitting any information</li>
                        <li>Ensure that the information cannot be used alone or in combination with other reasonably available information to identify an individual</li>
                        <li>Use general terms (e.g., "middle-aged patient" rather than specific ages)</li>
                        <li>Avoid specific location references beyond general geographic regions</li>
                    </ul>

                    <h3>5.4 Data Security and Retention</h3>
                    <ul>
                        <li>We implement reasonable security measures to protect submitted information</li>
                        <li>However, no system is completely secure, and we cannot guarantee the absolute security of your data</li>
                        <li>Any inadvertent PHI submitted through the Service may be retained in our systems and used for service improvement</li>
                        <li>We are not responsible for any privacy breaches resulting from users submitting PHI against these Terms</li>
                    </ul>

                    <h3>5.5 User Responsibility and Liability</h3>
                    <p><strong>YOU ARE SOLELY RESPONSIBLE FOR ENSURING THAT YOUR USE OF THE SERVICE COMPLIES WITH ALL APPLICABLE PRIVACY LAWS AND REGULATIONS.</strong> This includes:</p>
                    <ul>
                        <li>Verifying that any information you submit does not constitute PHI</li>
                        <li>Obtaining necessary permissions before discussing any patient-related scenarios</li>
                        <li>Ensuring compliance with your professional obligations and institutional policies</li>
                        <li>Implementing appropriate safeguards in your own practice and systems</li>
                    </ul>

                    <h3>5.6 Breach Notification</h3>
                    <p>If you believe you have inadvertently submitted PHI through the Service:</p>
                    <ul>
                        <li>Immediately contact us at hello@dermgpt.com</li>
                        <li>Provide details about the potentially disclosed information</li>
                        <li>We will work with you to address the situation, but cannot guarantee complete removal of information from our systems</li>
                    </ul>

                    <h3>5.7 Third-Party Access</h3>
                    <ul>
                        <li>Our staff may review submitted content for quality assurance and service improvement</li>
                        <li>Anonymized data may be shared with third-party service providers for technical support and model training</li>
                        <li>We will never intentionally share PHI with third parties, but cannot be liable for any PHI inadvertently submitted by users</li>
                    </ul>

                    <h2>6. Service Level Agreement</h2>
                    <h3>6.1 Availability</h3>
                    <p>We aim to maintain 99.5% uptime for the Service, excluding scheduled maintenance. Scheduled maintenance will be announced at least 24 hours in advance whenever possible.</p>

                    <h3>6.2 Response Time</h3>
                    <p>DermGPT is designed to provide responses within seconds. However, response times may vary based on query complexity, system load, and internet connectivity.</p>

                    <h3>6.3 Accuracy and Updates</h3>
                    <ul>
                        <li>DermGPT is regularly updated with current dermatological information and research</li>
                        <li>The Service's knowledge base may have limitations and may not reflect the very latest medical research</li>
                        <li>We make no guarantees regarding the accuracy, completeness, or timeliness of information provided</li>
                    </ul>

                    <h2>7. User Responsibilities</h2>
                    <h3>7.1 Acceptable Use</h3>
                    <p>Users agree not to:</p>
                    <ul>
                        <li>Use the Service for emergency medical situations</li>
                        <li>Rely solely on the Service for medical decisions</li>
                        <li>Upload content that violates privacy laws or includes personally identifiable information</li>
                        <li>Submit any Protected Health Information (PHI) as defined in Section 5</li>
                        <li>Attempt to extract unauthorized medical advice for serious conditions</li>
                        <li>Use the Service in any way that could harm, disable, or impair the Service</li>
                    </ul>

                    <h3>7.2 Age Restrictions</h3>
                    <p>You must be at least 18 years of age to use this Service.</p>

                    <h2>8. Limitation of Liability</h2>
                    <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL DERMGPT, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THIS SERVICE.</strong></p>
                    <p><strong>PRIVACY-RELATED LIABILITY:</strong> We shall not be liable for any privacy breaches, regulatory violations, or other consequences resulting from users submitting Protected Health Information contrary to these Terms. Users assume full responsibility and liability for ensuring their use complies with applicable privacy laws.</p>

                    <h2>9. Changes to Terms</h2>
                    <p>We reserve the right to modify these Terms at any time. We will provide notice of any material changes through the Service or other means. Your continued use of the Service after such modifications constitutes your acceptance of the modified Terms.</p>

                    <h2>10. Termination</h2>
                    <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including breach of the Terms, particularly violations of privacy requirements outlined in Section 5.</p>

                    <h2>11. Governing Law</h2>
                    <p>These Terms shall be governed by the laws of the United States, without regard to its conflict of law provisions.</p>

                    <div className="last-updated">
                        <p><strong>Last updated:</strong> 05.30.2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SLA; 