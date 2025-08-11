import { profile, projects, internships } from './data';
import profileImage from '@/public/images/profile-image.png';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { sections } from './sections';
import { Fragment } from 'react';

export default function About() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4">
        <h1
          id="intro"
          className="scroll-mt-[var(--section-top-gap)] text-3xl font-bold tracking-tight"
        >
          안녕하세요, <span className="text-primary">{profile.name}</span>입니다! 👋
        </h1>
        <div className="flex items-center gap-4 md:flex-row">
          <div className="rom-primary/20 to-primary/10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br p-1 backdrop-blur-sm">
            <Image
              src={profileImage}
              alt="profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="text-muted-foreground text-sm leading-relaxed break-words whitespace-pre-line md:text-lg">
              {profile.description}
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {sections.map((section) => (
        <Fragment key={section.key}>
          <section
            id={section.key}
            className="relative scroll-mt-[var(--section-top-gap)] space-y-6"
          >
            <div className="sticky top-[var(--sticky-top)] flex flex-col gap-4">
              <div>
                <h2 className="mb-2 flex items-center gap-2 text-3xl font-bold tracking-tight">
                  {section.title}
                </h2>
                <p className="text-muted-foreground">{section.subTitle}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <section.component />
              </div>
            </div>
          </section>

          <Separator />
        </Fragment>
      ))}

      <section id="internships" className="scroll-mt-[var(--section-top-gap)] space-y-6">
        <div>
          <h2 className="mb-2 flex items-center gap-2 text-3xl font-bold tracking-tight">
            인턴 이력
          </h2>
          <p className="text-muted-foreground">
            인턴십 기간 동안 진행한 주요 프로젝트를 소개합니다.
          </p>
        </div>

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
                                      className="hover:underline"
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

                  {internship.projectLinks && (
                    <div className="flex gap-4">
                      {internship.projectLinks.github && (
                        <a
                          href={internship.projectLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-sm transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {internship.projectLinks.website && (
                        <a
                          href={internship.projectLinks.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-sm transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>웹사이트</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section id="projects" className="scroll-mt-[var(--section-top-gap)] space-y-6">
        <div>
          <h2 className="mb-2 flex items-center gap-2 text-3xl font-bold tracking-tight">
            프로젝트
          </h2>
          <p className="text-muted-foreground">진행했던 주요 프로젝트들을 소개합니다.</p>
        </div>

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
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
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
                                      className="hover:underline"
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

                  {project.projectLinks && (
                    <div className="flex gap-4">
                      {project.projectLinks.github && (
                        <a
                          href={project.projectLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-sm transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.projectLinks.website && (
                        <a
                          href={project.projectLinks.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-sm transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>웹사이트</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
