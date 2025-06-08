import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
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
      <div className="flex flex-wrap gap-4 mt-6">
        <a href={project.website} target="_blank" rel="noreferrer">
          <Button variant="primary">Visit Site</Button>
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          <Button variant="secondary">GitHub Repo</Button>
        </a>
        <Link to="/">
          <Button variant="primary">← Back to Projects</Button>
        </Link>
      </div>

      <section className="mt-8 border-t border-gray-700 pt-4">
        <h2 className="text-2xl font-bold mb-2">
          Reflections and Improvements
        </h2>
        <p className="text-white">{project.reflection}</p>
      </section>
    </div>
  );
}

export default ProjectDetail;
