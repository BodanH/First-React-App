import { NavLink } from "react-router-dom";

const ProjectCard = ({ title, img, id }) => {

    return ( 
        <li className="projects-section-content-list__item projects-list-item">
            <NavLink to={`/project/${id}`}>
                <div className="projects-list-item__image">
                    <img src={img} alt="Picture"/>
                </div>
                <h3 className="projects-list-item__title">{title}</h3>
            </NavLink>
        </li>
    );
}
 
export default ProjectCard;