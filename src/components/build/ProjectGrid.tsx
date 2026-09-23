import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} eager={index === 0} />
      ))}
    </div>
  );
}
