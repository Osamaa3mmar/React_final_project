import { Col, Row } from "react-bootstrap";
import ContactForm from "../../../component/user/contactElement/ContactForm";
import ContactSide from "../../../component/user/contactElement/ContactSide";
import style from './contact.module.css'
export default function Contact() {
  return (
    <div className={"container " + style.pad}>
      <Row className="g-4">
      <Col lg={4} sm={12}>
      <ContactSide/>
      </Col>
      <Col lg={8} sm={12}>
      <ContactForm/>
      </Col>
      </Row>
    </div>
  )
}
