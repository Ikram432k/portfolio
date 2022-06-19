import HeadBtns from "./headBtn";
import HeadSocial from "./HeadSocial";
import {Header} from "./homestyle";
const Home =()=>{
return(
    <Header>
        <div className="container header_container">
            <h1>Hi I'm Ikram Mohideen</h1>
            <h3 className="text-light">Frontend Developer</h3>
            <HeadBtns/>
            <HeadSocial />
            <a href="#contact" className="scroll_down">Scroll Down</a> 
        </div>

    </Header>
)
}
export default Home;