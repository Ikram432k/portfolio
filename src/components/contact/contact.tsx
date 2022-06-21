import {BsLinkedin,BsTwitter} from 'react-icons/bs';
import {IoMdMail} from 'react-icons/io';
import {Section} from "./contactStyle";
const Contact=()=>{
    return(
        <Section id="contact" className="container contact_container">
            <h2>Contact</h2>
            <div className="card_container">
                <div className='contact_card'>
                <a href="https://www.linkedin.com/in/ikram-mohideen-235313229/" target="_blank" rel="noreferrer" ><BsLinkedin size={50}/></a>
                <h4>Linkedin</h4>
                </div>
                <div className='contact_card'>
                <a href="mailto:ikram432k@gmail.com"><IoMdMail size={50}/></a>
                <h4>Gmail</h4>
                </div>
                <div className='contact_card'>
                <a href="https://twitter.com/IkramMohideen1" target="_blank" rel='noreferrer'><BsTwitter size={50}/></a>
                <h4>Twitter</h4>
                </div>
                <a href="#" className="scroll_up">Scroll up</a> 
            </div>
        </Section>
    )
}
export default Contact;