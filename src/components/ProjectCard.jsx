import "../Homepage.css";
import { motion } from "framer-motion";

const ProjectCard = ({ link, title, image, tags }) => {
  return (
    <a href={link}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10 }} //effetto sollevamento al passaggio del mouse
        transition={{ duration: 0.5 }}
        className="project-card"
      >
        <img src={image} className="project-image" />

        <div className="project-overlay">
          <h3>{title}</h3>
          <div className="tag-container">
            {tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
