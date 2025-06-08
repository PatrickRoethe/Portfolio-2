import { Link, useParams } from "react-router-dom";
import { projects } from "../data/project";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-red-400">Project Not Found</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="mb-4 rounded shadow-lg max-w-full"
      />
      <p className="text-white mb-4">{project.teaser}</p>
      <div className="flex gap-4">
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          Visit Site
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          Github Repo
        </a>
        <Link
          to="/"
          className="mt-6 inline-block text-blue-400 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
