import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="hover:no-underline">
      <div className="bg-gray-800 rounded-lg shadow-md hover:scale-[1.02] transition overflow-hidden flex flex-col">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="text-gray-300 mt-2 text-sm">{project.teaser}</p>
          <Link
            to={`/project/${project.id}`}
            className="mt-4 text-blue-400 hover:underline text-sm"
          >
            Read more
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
