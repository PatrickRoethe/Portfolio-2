import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import { projects } from "../data/project";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-red-400">Project Not Found</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto text-textLight space-y-10">
      {/* Title and teaser */}
      <section className="text-center md:text-left space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
        <p className="text-base md:text-lg text-textLight/90">
          {project.teaser}
        </p>
      </section>

      {/* Image */}
      <section className="text-center">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="mx-auto rounded-xl shadow-md max-h-[400px] object-contain"
        />
      </section>

      {/* Action Buttons */}
      <section className="flex flex-wrap justify-center md:justify-start gap-4">
        <a href={project.website} target="_blank" rel="noreferrer">
          <Button variant="primary">Visit Site</Button>
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          <Button variant="secondary">GitHub Repo</Button>
        </a>
        <Link to="/">
          <Button variant="primary">← Back to Projects</Button>
        </Link>
      </section>

      {/* Reflections and Improvements */}
      <section className="border-t border-textLight/30 pt-6 space-y-4">
        <h2 className="text-2xl font-bold">Reflections and Improvements</h2>
        <p className="text-sm md:text-base leading-relaxed text-textLight/90 whitespace-pre-line">
          {project.reflection}
        </p>
      </section>
    </div>
  );
}

export default ProjectDetail;
