import { Badge } from '@/components/ui/badge';
import { projects } from '../data';
import ProjectLinkButton from './ProjectLinkButton';
import ProjectHighlight from './ProjectHighlight';

export default function ProjectsSection() {
  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <div key={index} className="space-y-4">
          <div>
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
          </div>

          <div className="border-primary/30 border-l-4 pl-6">
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-base font-semibold">기간</h4>
                <p className="text-muted-foreground">{project.period}</p>
              </div>

              <div>
                <h4 className="mb-2 text-base font-semibold">기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-base font-semibold">주요 내용</h4>
                <ProjectHighlight project={project} />
              </div>

              {project.projectLinks && <ProjectLinkButton links={project.projectLinks} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
