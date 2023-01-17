import { MdPlace, MdPhone, MdEmail } from "react-icons/md";
import ContactInfoItem from "../components/ContactInfoItem";
import ContactForm from "../components/ContactForm";

function Contacto() {
  return (
    <div className="contactBody">
      <div className="contact-container">
        <div className="contact-header">
          <p>Cómo podemos ayuderte?</p>
          <h1>Contáctanos</h1>
        </div>
        <div className="contact-section-wrapper">
          <div className="contact-left">
            <ContactInfoItem
              icon={<MdPhone size={"2em"} />}
              text="+5743128762244"
            />
            <ContactInfoItem
              icon={<MdEmail size={"2em"} />}
              text="viviana@email.com"
            />
            <ContactInfoItem
              icon={<MdPlace size={"2em"} />}
              text="Medellin, CO"
            />
          </div>
          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
