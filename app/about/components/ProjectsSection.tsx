import { projects } from '../data';
import ExperienceCard from './ExperienceCard';

export default function ProjectsSection() {
  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <ExperienceCard key={index} item={project} />
      ))}
    </div>
  );
}
