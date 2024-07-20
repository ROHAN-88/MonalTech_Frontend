import ContactForm from "@/apps/contactComponent/ContactForm";
import ContactusSide from "@/apps/contactComponent/ContactusSide";

const ContactUs = () => {
  return (
    <div className=" lg:container">
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginTop: "2rem",
          color: "#FFD23F",
        }}
      >
        Contact Us
      </h1>

      <section
        className="lg:grid grid-cols-2 place-content-center gap-3 dark:border-2 dark:border-gray-800 pl-5"
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          boxShadow: " rgba(0, 0, 0, 0.1) 0px 10px 50px",
          borderRadius: "20px",
          // border: "1px red solid",
        }}
      >
        {/* //! section : form  */}
        <div className="dark:border-white">
          <ContactForm />
        </div>

        {/* //! section : map and info  */}
        <div style={{ width: "100%", height: "100%" }}>
          <ContactusSide />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
