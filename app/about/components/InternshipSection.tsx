import { internships } from '../data';
import ExperienceCard from './ExperienceCard';

export default function InternshipSection() {
  return (
    <div className="space-y-8">
      {internships.map((internship, index) => (
        <ExperienceCard key={index} item={internship} />
      ))}
    </div>
  );
}
