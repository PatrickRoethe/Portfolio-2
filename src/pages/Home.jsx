import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/project";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Home;
