import "./ContactMe.css";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    setLoading(true);

    // Simulate a subscription process with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setSubscribed(true);
  };

  return (
    <>
      <section id="contact">
        <div className="contact-me2">
          <div className="contactme-t1 pb-3">
            <h2>Newsletter</h2>
          </div>
          <div className="contact-me2-dec"></div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-5 col-md-12">
              <div className="work-togather-text">
                <h2 className="h2-title text-white">Let's Work Together</h2>
                <p>
                  Are you impressed and want a project done, give me a call or
                  email me any time.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="work-togather-form">
                <form onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    name="Email"
                    className="form-input-one subscribe-input"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading || subscribed}
                  />
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="work-togather-form-btn">
                <button
                  type="submit"
                  className="sec-btn"
                  onClick={handleSubscribe}
                  disabled={loading || subscribed}
                >
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" role="status" />{" "}
                      Subscribing...
                    </>
                  ) : subscribed ? (
                    "Subscribed!"
                  ) : (
                    "Subscribe Now"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
