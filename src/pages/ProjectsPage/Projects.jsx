import ProjectCard from "../../components/project/Project";
import { projects } from "../../components/helpers/ProjectsList";
import "./Projects.css"


const ProjectsPage = () => {
    return ( 
        <main className="main">
            <section id="section__projects" className="section__projects projects-section">
                <div className="projects-section__container projects-section-container">
                    <div className="projects-section-container__content projects-section-content">
                        <h3 className="projects-section-content__title">Projects</h3>
                        <ul className="projects-section-content__list projects-section-content-list">
                            {projects.map((project, id) => {
                                return <ProjectCard key={id} title={project.title} img={project.img} id={id} />
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default ProjectsPage;