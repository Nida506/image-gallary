import { useState } from "react";
import Navbar from "../components/Navbar";
//for css styling import this
import styles from "./Terms.module.css";
function Terms({ setDarkMode, darkMode }) {
  //state variables
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);

  return (
    <div className={`${darkMode ? styles.terms : ""}  ${styles.termsHeight}`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className={styles.termsSection}>
        <div
          className={`${darkMode ? styles.bgDark : styles.bgLight} ${
            styles.termsSectionContent
          }`}
        >
          <div className="mb-3">
            <div
              className={`${question1 ? styles.colorBlue : ""} ${styles.decor}`}
              onClick={() => setQuestion1((prevState) => !prevState)}
            >
              Introduction
            </div>
            {question1 ? (
              <div className="ms-2">
                Welcome to our Terms and Conditions page. These terms outline
                the rules and guidelines for using our website.
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <div
              className={`${question2 ? styles.colorBlue : ""} ${styles.decor}`}
              onClick={() => setQuestion2((prevState) => !prevState)}
            >
              Acceptance of Terms
            </div>
            {question2 ? (
              <div className="ms-2">
                By accessing or using our website, you agree to comply with
                these terms and conditions. If you do not agree, please do not
                use our site.
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <div
              className={`${question3 ? styles.colorBlue : ""} ${styles.decor}`}
              onClick={() => setQuestion3((prevState) => !prevState)}
            >
              Changes to Terms
            </div>
            {question3 ? (
              <div className="ms-2">
                We reserve the right to modify these terms at any time. Any
                changes will be posted on this page and will take effect
                immediately.
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <div
              className={`${question4 ? styles.colorBlue : ""} ${styles.decor}`}
              onClick={() => setQuestion4((prevState) => !prevState)}
            >
              User Responsibilities
            </div>
            {question4 ? (
              <div className="ms-2">
                As a user, you are responsible for maintaining the
                confidentiality of your account information and for all
                activities that occur under your account.
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <div
              className={`${question5 ? styles.colorBlue : ""} ${styles.decor}`}
              onClick={() => setQuestion5((prevState) => !prevState)}
            >
              Limitation of Liability
            </div>
            {question5 ? (
              <div className="ms-2">
                We are not liable for any damages or losses resulting from the
                use of our website or services. This includes indirect,
                incidental, or consequential damages.
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <div
              className={`${question6 ? styles.colorBlue : ""} ${styles.decor}`}
              onClick={() => setQuestion6((prevState) => !prevState)}
            >
              Governing Law
            </div>
            {question6 ? (
              <div className="ms-2">
                These terms are governed by and construed in accordance with the
                laws of <span className={styles.span}>[Your Country]</span>. Any
                disputes arising under these terms will be subject to the
                exclusive jurisdiction of the courts in{" "}
                <span className={styles.span}> [Your Country]</span>.
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <div
              className={`${question7 ? styles.colorBlue : ""} ${styles.decor}`}
              onClick={() => setQuestion7((prevState) => !prevState)}
            >
              Contact Information
            </div>
            {question7 ? (
              <div className="ms-2">
                If you have any questions about these terms, please contact us
                at <span className={styles.span}>[support email address]</span>{" "}
                or <span className={styles.span}> [support phone number]</span>.
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
