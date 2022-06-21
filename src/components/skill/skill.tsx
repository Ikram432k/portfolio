import { Section } from "./skillStyle";
import { data } from "../data/icons";
const Skill =()=>{
    return(
        <Section id="skills" className="">
            <h5>What i have Learned</h5>
            <h2>skills</h2>
            <div className="container project_container">
                {data.map((obj,i)=>{
                    return(
                        <article className="project_item" key={i}>
                            <img src={obj.path} alt="" />
                            <h3>{obj.title}</h3>
                    </article>
                    );
                })}
            </div>
        </Section>
    )
}
export default Skill;