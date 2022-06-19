import {BsLinkedin,BsTwitter} from 'react-icons/bs';
import {IoMdMail} from 'react-icons/io';
import {Section} from "./contactStyle";
const Contact=()=>{
    return(
        <Section id="contact" className="container contact_container ">
            <h2>Contact</h2>
            <div className="card_container">
                <div className='contact_card'>
                <a href="" target="_blank"><BsLinkedin className='icon'/></a>
                <h4>Linkedin</h4>
                </div>
                <div className='contact_card'>
                <a href="" target="_blank"><IoMdMail/></a>
                <h4>Gmail</h4>
                </div>
                <div className='contact_card'>
                <a href="" target="_blank"><BsTwitter/></a>
                <h4>Twitter</h4>
                </div>
            </div>
        </Section>
    )
}
export default Contact;