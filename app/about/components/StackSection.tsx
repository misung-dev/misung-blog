import { skills } from '@/app/about/data';
import { Badge } from '@/components/ui/badge';

export default function StackSection() {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} variant="default" className="bg-primary/10 text-primary text-sm">
          {skill}
        </Badge>
      ))}
    </div>
  );
}
