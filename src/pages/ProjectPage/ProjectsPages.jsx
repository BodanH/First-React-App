import { useParams } from "react-router-dom";
import { projects } from "../../components/helpers/ProjectsList";
import "./pages__style.css"

const ProjectsPages = () => {
    const { id } = useParams();
    	const project = projects[id];
    return ( 
        <main className="main">
            <section className="projects-section__title title-section">
               <div className="title-section__container">
                <div className="title-section__content">
                        <h2 className="title-section-content__title">{project.title}</h2>
                    <div className="title-section-content__img">
                        <img src={project.imgBig} width="865.38" height="650" alt="Picture"/>
                    </div>
                    <div className="title-section-content__git">
                        <h3 className="title-section-content__subtitle">{project.skills}</h3>
                        <a href={project.gitHubLink} className="title-section-content__repo">GitHub repo</a>
                        </div>
                     
                </div>
               </div>
            </section>
        </main>
     );
}
 
export default ProjectsPages;