import { Link } from "react-router-dom";
import Button from "./Button";

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="block hover:no-underline">
      <div className="bg-gray-800 rounded-lg shadow-md hover:scale-[1.02] transition overflow-hidden flex flex-col">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="text-gray-300 mt-2 text-sm">{project.teaser}</p>
          <div className="mt-4">
            <Link to={`/project/${project.id}`}>
              <Button variant="secondary">Read more</Button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
