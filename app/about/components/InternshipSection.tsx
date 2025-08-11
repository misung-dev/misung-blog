import { Badge } from '@/components/ui/badge';
import { internships } from '../data';
import ProjectLinkButton from './ProjectLinkButton';
import ProjectHighlight from './ProjectHighlight';

export default function InternshipSection() {
  return (
    <div className="space-y-8">
      {internships.map((internship, index) => (
        <div key={index} className="space-y-4">
          <div>
            <h3 className="mb-2 text-xl font-semibold">{internship.title}</h3>
          </div>

          <div className="border-primary/30 border-l-4 pl-6">
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-base font-semibold">기간</h4>
                <p className="text-muted-foreground">{internship.period}</p>
              </div>

              <div>
                <h4 className="mb-2 text-base font-semibold">기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-base font-semibold">주요 내용</h4>
                <ProjectHighlight project={internship} />
              </div>

              {internship.projectLinks && <ProjectLinkButton links={internship.projectLinks} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
