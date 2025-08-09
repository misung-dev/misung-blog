import { profile, skills, projects } from './data';
import ContactSection from '../_components/ContactSection';
import profileImage from '@/public/images/profile-image.png';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4">
        <h1
          id="intro"
          className="scroll-mt-[var(--header-height)] text-3xl font-bold tracking-tight"
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

      <section id="links" className="relative scroll-mt-[var(--header-height)] space-y-6">
        <div className="sticky top-[var(--sticky-top)] flex flex-col gap-4">
          <div>
            <h2 className="mb-2 flex items-center gap-2 text-3xl font-bold tracking-tight">링크</h2>
            <p className="text-muted-foreground">저와 관련한 링크들입니다.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <ContactSection />
          </div>
        </div>
      </section>

      <Separator />

      <section id="skills" className="relative scroll-mt-[var(--header-height)] space-y-6">
        <div className="sticky top-[var(--sticky-top)] flex flex-col gap-4">
          <div>
            <h2 className="mb-2 flex items-center gap-2 text-3xl font-bold tracking-tight">
              기술 스택
            </h2>
            <p className="text-muted-foreground">현재 사용하고 있는 주요 기술들입니다.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section id="projects" className="scroll-mt-[var(--header-height)] space-y-6">
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
                <p className="text-muted-foreground mb-4">{project.description}</p>
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
                    <h4 className="mb-2 text-base font-semibold">주요 특징</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-primary h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.links && (
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-sm transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.links.website && (
                        <a
                          href={project.links.website}
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
