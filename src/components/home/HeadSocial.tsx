import {BsLinkedin,BsGithub,BsTwitter} from 'react-icons/bs';
import {IoMdMail} from 'react-icons/io';
const HeadSocial =()=>{
return(
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/ikram-mohideen-235313229/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Ikram432k" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="mailto:ikram432k@gmail.com"><IoMdMail/></a>
        <a href="https://twitter.com/IkramMohideen1" target="_blank" rel='noreferrer'><BsTwitter/></a>
    </div>
)
}
export default HeadSocial;