import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <ProjectCard
        imageName="maze.png"
        title="Graph Algorithm Visualizer"
        description="A pathfinding algorithm visualizer: place a start and end square and
             the program finds the shortest path. Provides the ability to use
             different pathfinding algorithms as well as different maze
             generation algorithms."
        projectUrl="#"
      />

      <ProjectCard
        imageName="investment-island.png"
        title="Investment Island"
        description="An ongoing group project that I am working on at the moment with the 
        WDCC club at the University of Auckland. My role is a front-end developer. Is yet to be completed."
        projectUrl="#"
      />
    </div>
  );
};

export default Projects;
