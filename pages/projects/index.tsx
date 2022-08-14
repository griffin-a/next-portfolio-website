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
        projectUrl="https://graph-algo-visualizer-griffin-a.netlify.app/"
      />

      <ProjectCard
        imageName="investment-island.png"
        title="Investment Island"
        description="An ongoing group project that I am working on at the moment with the 
        WDCC club at the University of Auckland. My role is a front-end developer. Is yet to be completed."
        projectUrl="https://github.com/UoaWDCC/Investment-island"
      />

      <ProjectCard
        imageName="todo.jpeg"
        title="Todo List Web-App"
        description="A full-stack todo list web-app that provides full CRUD functionality and connection to a database.
        Uses authentication and authorization to create and use accounts."
        projectUrl="#"
      />

      <ProjectCard
        imageName="co2.jpeg"
        title="Carbon Emissions Calculator"
        description="A proof of concept design for a carbon emissions calculator. A high-fidelity prototype."
        projectUrl="https://griffin-a.github.io/345-a2/"
      />

      <ProjectCard
        imageName="library.jpeg"
        title="Book Library Browser"
        description="A full-stack application that provides the ability to browse and search for books in a
        database and create/sign in to accounts."
        projectUrl="https://book-web-app-235.herokuapp.com/"
      />

      {/* <ProjectCard
        imageName="concert.jpeg"
        title="Concert Booking Website"
        description="A full-stack concert booking service that supports registering and logging in. Group project"
        projectUrl="#"
      /> */}
    </div>
  );
};

export default Projects;
