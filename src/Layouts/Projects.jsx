import { useEffect, useState } from "react";
import LeftTitle from "../Components/LeftTitle";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Projects/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div
      className="w-4/5 mx-auto my-10"
      id="projects">
      <LeftTitle titleName={"Projects"}></LeftTitle>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            image={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
            tools={project.tools}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
