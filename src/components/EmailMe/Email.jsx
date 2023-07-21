import { Button, Spinner } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import "./Email.css";
import { useGetContactsQuery } from "../../Api/api";
import emailjs from "emailjs-com";

const Email = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, subject, message } = form.current;

    if (!user_name.value || !user_email.value || !subject.value || !message.value) {
      alert("Please fill in all the fields before sending the email.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });

    e.target.reset();
  };

  const { data: contacts, isFetching } = useGetContactsQuery();
  const [contactsDetails, setContactDetails] = useState(contacts);

  useEffect(() => {
    setContactDetails(contacts);
  }, [contacts]);

  if (isFetching) return "loading";

  return (
    <>
      <div className="reachme-container">
        <div className="reachme-title2">
          <h2>I Want To Hear From You</h2>
          <h3>Contact Me</h3>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="reachme-title">
              <div className="row">
                {contactsDetails &&
                  contactsDetails.map((details) => (
                    <div className="contact-info" key={details.id}>
                      <div className="contact-details">
                        <i className={details.icon}></i>
                        <div className="contact-mi">
                          <h4 className="icon-name">{details.contact_name}:</h4>
                          <p className="d-name">{details.contact_info}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 email-me container">
            {/* Spinner overlay */}
            {loading && (
              <div className="spinner-overlay">
                <Spinner animation="border" role="status" />
                {/* <p>Sending...</p> */}
              </div>
            )}

            <form
              action=""
              className="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-md-12 mb-3 hire-me-title"></div>
                <div className="col-md-6 ">
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    name="user_email"
                    id=""
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    id=""
                    placeholder="Enter Subject"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <textarea
                    name="message"
                    id=""
                    cols="60"
                    rows="8"
                    placeholder="Your Message"
                  ></textarea>
                  <Button className="hire-btn" type="submit" disabled={loading}>
                    {messageSent ? "Message Sent!" : "Send Message"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
