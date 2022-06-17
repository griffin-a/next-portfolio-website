import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    // <div className="flex justify-center mx-auto">
    //   <a
    //     href="#"
    //     className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    //   >
    //     <Image
    //       src={maze}
    //       alt="Maze"
    //       priority={true}
    //       className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    //       width={400}
    //       height={400}
    //       placeholder="blur"
    //     />

    //     <div className="flex flex-col justify-between p-4 leading-normal">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         Graph Algorithm Visualizer
    //       </h5>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         A pathfinding algorithm visualizer: place a start and end square and
    //         the program finds the shortest path. Provides the ability to use
    //         different pathfinding algorithms as well as different maze
    //         generation algorithms.
    //       </p>
    //     </div>
    //   </a>
    // </div>
    <div>
      <ProjectCard
        imagePath="../public/maze.png"
        title="Graph Algorithm Visualizer"
        description="A pathfinding algorithm visualizer: place a start and end square and
             the program finds the shortest path. Provides the ability to use
             different pathfinding algorithms as well as different maze
             generation algorithms."
        projectUrl="#"
      />
    </div>
  );
};

export default Projects;
