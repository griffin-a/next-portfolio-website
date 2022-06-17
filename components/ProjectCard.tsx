import Image from "next/image";

type ProjectCardProps = {
  imagePath: string;
  title: string;
  description: string;
  projectUrl: string;
};

const ProjectCard = ({
  imagePath,
  title,
  description,
  projectUrl,
}: ProjectCardProps) => {
  return (
    <div className="flex justify-center mx-auto">
      <a
        href={projectUrl}
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <Image
          src={imagePath}
          alt={title}
          priority={true}
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          width={400}
          height={400}
          placeholder="blur"
        />

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
