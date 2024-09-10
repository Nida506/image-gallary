import { useState } from "react";
import Navbar from "../components/Navbar";
//import css for this component
import styles from "./FAQ.module.css";

function FAQ({ setDarkMode, darkMode }) {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);
  const [question8, setQuestion8] = useState(false);
  const [question9, setQuestion9] = useState(false);
  const [question10, setQuestion10] = useState(false);

  return (
    <div className={`${darkMode ? styles.faq : ""} ${styles.faqHeight}`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className={styles.faqSection}>
        <div
          className={`${darkMode ? styles.bgDark : styles.bgLight} ${
            styles.faqSectionContent
          }`}
        >
          <div className="mb-3">
            <div
              className={`${question1 ? styles.colorBlue : ""} ${styles.decor}`}
              onClick={() => setQuestion1((prevState) => !prevState)}
            >
              What is this website about?
            </div>
            {question1 ? (
              <div className="ms-2">
                This website is a platform designed to{" "}
                <span className={styles.span}>
                  [describe the main purpose of your website, such as providing
                  information, offering a service, selling products, etc.]
                </span>
                . Our goal is to{" "}
                <span className={styles.span}>
                  [state your mission or vision]
                </span>
                .
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
              How do I create an account?
            </div>
            {question2 ? (
              <div className="ms-2">
                To create an account, click on the "Sign Up" button at the top
                right corner of the homepage. Fill in the required details,
                including your name, email address, and password. Once
                submitted, you will receive a confirmation email to verify your
                account.
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
              How can I reset my password?
            </div>
            {question3 ? (
              <div className="ms-2">
                If you have forgotten your password, click on the "Forgot
                Password" link on the login page. Enter your registered email
                address, and we will send you instructions on how to reset your
                password.
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
              How do I contact customer support?
            </div>
            {question4 ? (
              <div className="ms-2">
                You can contact our customer support team by clicking on the
                "Contact Us" link at the bottom of the page. Alternatively, you
                can email us at{" "}
                <span className={styles.span}>[support email address]</span> or
                call us at{" "}
                <span className={styles.span}>[support phone number]</span>.
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
              What payment methods do you accept?
            </div>
            {question5 ? (
              <div className="ms-2">
                We accept various payment methods including credit/debit cards
                <span className={styles.span}>
                  {" "}
                  (Visa, MasterCard, American Express)
                </span>
                , PayPal, and other online payment gateways. Please see our
                Payment Methods page for more details.
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
              What is your return policy?
            </div>
            {question6 ? (
              <div className="ms-2">
                We offer a 30-day return policy on most products. If you are not
                satisfied with your purchase, you can return it within 30 days
                of receiving it for a full refund or exchange. Please refer to
                our Return Policy page for more details.
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
              How do I track my order?
            </div>
            {question7 ? (
              <div className="ms-2">
                Once your order is shipped, you will receive a tracking number
                via email. You can use this number on our Track Order page to
                see the status of your shipment.
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <div
              className={`${question8 ? styles.colorBlue : ""} ${styles.decor}`}
              onClick={() => setQuestion8((prevState) => !prevState)}
            >
              Can I change or cancel my order?
            </div>
            {question8 ? (
              <div className="ms-2">
                If you need to change or cancel your order, please contact us as
                soon as possible. We will do our best to accommodate your
                request, but please note that orders that have already been
                processed or shipped cannot be changed or canceled.
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <div
              className={`${question9 ? styles.colorBlue : ""} ${styles.decor}`}
              onClick={() => setQuestion9((prevState) => !prevState)}
            >
              Do you ship internationally?
            </div>
            {question9 ? (
              <div className="ms-2">
                Yes, we do offer international shipping. Please see our Shipping
                Information page for more details on shipping rates and delivery
                times for your region.
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <div
              className={`${question10 ? styles.colorBlue : ""} ${
                styles.decor
              }`}
              onClick={() => setQuestion10((prevState) => !prevState)}
            >
              How can I provide feedback about my experience?
            </div>
            {question10 ? (
              <div className="ms-2">
                We value your feedback! You can provide feedback by clicking on
                the "Feedback" link at the bottom of the page or by contacting
                our customer support team. Your insights help us improve our
                services.
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

export default FAQ;
