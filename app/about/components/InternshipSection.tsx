import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { internships } from '../data';
import ProjectLinkButton from './ProjectLinkButton';

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
                <ul className="space-y-2">
                  {internship.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary mt-[0.1rem] h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                      <span className="text-muted-foreground -mt-2">
                        {highlight.text}
                        {highlight.links && highlight.links.length > 0 && (
                          <span className="text-primary ml-1">
                            (
                            {highlight.links.map((link, linkIndex) => (
                              <span key={link.slug}>
                                {linkIndex > 0 && ', '}
                                <a
                                  href={`https://www.misung.dev/blog/${link.slug}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline"
                                >
                                  {link.label}
                                </a>
                              </span>
                            ))}
                            )
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {internship.projectLinks && <ProjectLinkButton links={internship.projectLinks} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
