import { Badge } from '@/components/ui/badge';
import { Project } from '../data';
import ProjectLinkButton from './ProjectLinkButton';
import ProjectHighlight from './ProjectHighlight';

interface ExperienceCardProps {
  item: Project;
}

export default function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-2 space-y-4">
      <h3 className="mb-0 text-xl font-semibold">{item.title}</h3>

      <div className="border-primary/30 flex flex-col gap-4 border-l-4 pl-6">
        <div className="flex flex-col gap-1">
          <h4 className="text-base font-semibold">기간</h4>
          <p className="text-muted-foreground">{item.period}</p>
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-base font-semibold">기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            {item.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-base font-semibold">주요 내용</h4>
          <div className="flex flex-col gap-1">
            <ProjectHighlight project={item} />
          </div>
        </div>

        {item.projectLinks && (
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-semibold">프로젝트 링크</h4>
            <ProjectLinkButton links={item.projectLinks} />
          </div>
        )}
      </div>
    </div>
  );
}
