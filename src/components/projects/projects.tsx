import { projectData } from "../data/projectsData";
import { Section } from "./projectsStyle";
const Project =()=>{
    return(
        <Section id="projects" className="">
            <h5>My recent Works</h5>
            <h2>projects</h2>
            <div className="container project_container">
                {projectData.map((obj,i)=>{
                    return(
                        <article className="project_item" key={i}>
                        <div className="project_img">
                            <img src={obj.path} alt="" />
                        </div>
                        <h3>{obj.title}</h3>
                        <div className="project_item-btn">
                        <a href={obj.code} className="btn">View code</a>
                        <a href={obj.demo} className="btn btn-primary">Live Demo</a>
                        </div>
                    </article>
                    );
                })}
            </div>
        </Section>
        )
}
export default Project;