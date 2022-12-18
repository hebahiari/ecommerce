import "./contact.scss";
import {
  Facebook,
  Instagram,
  Twitter,
  Google,
  Pinterest,
} from "@mui/icons-material";

export default function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Get in touch:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail" />
          <button>Send</button>
        </div>
        <div className="icons">
          <Facebook />
          <Instagram />
          <Twitter />
          <Google />
          <Pinterest />
        </div>
      </div>
    </div>
  );
}
