import { LiaPaperPlaneSolid } from "react-icons/lia";

const Contact = () => {
  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/place/Manipal+Academy+of+Higher+Education,+Bengaluru/@13.1233297,77.5896128,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae19d502aa02b3:0xb31f075ede4c71ab!8m2!3d13.1233297!4d77.5921877!16s%2Fg%2F11sqnl75nc?entry=ttu"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" disabled data-form-btn>
            <LiaPaperPlaneSolid />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};
export default Contact;
