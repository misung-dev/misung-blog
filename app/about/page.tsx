import { profile, skills } from './constants';
import ContactSection from '../_components/ContactSection';
import profileImage from '@/public/images/profile-image.png';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Code2 } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-8">
      <h2 className="text-primary text-3xl font-bold tracking-tight">소개</h2>
      <section id="intro" className="space-y-8">
        <div className="flex flex-col items-start gap-6 md:flex-row">
          <div className="relative flex-shrink-0">
            <div className="from-primary/20 to-primary/10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br">
              <Image src={profileImage} alt="profile" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="mb-4 text-2xl font-bold tracking-tight">
              안녕하세요, {profile.name}입니다! 👋
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed break-words whitespace-pre-line">
              {profile.description}
            </p>
            <ContactSection />
          </div>
        </div>
      </section>

      <Separator />

      <section id="skills" className="space-y-6">
        <div>
          <h2 className="text-primary mb-2 flex items-center gap-2 text-3xl font-bold tracking-tight">
            기술 스택
          </h2>
          <p className="text-muted-foreground">현재 사용하고 있는 주요 기술들입니다.</p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
