import { Fragment } from 'react';
import Image from 'next/image';
import profileImage from '@/public/images/profile-image.jpg';
import { Separator } from '@/components/ui/separator';
import { profile } from './data';
import { sections } from './sections';

export default function About() {
  return (
    <div className="mb-16 space-y-8">
      <section className="flex flex-col gap-4">
        <h1
          id="intro"
          className="scroll-mt-[var(--section-top-gap)] text-3xl font-bold tracking-tight"
        >
          안녕하세요, <span className="text-primary">{profile.name}</span>입니다! 👋
        </h1>
        <div className="flex items-center gap-4 md:flex-row">
          <div className="border-primary flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2">
            <Image
              src={profileImage}
              alt="profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="text-muted-foreground text-sm leading-relaxed break-words whitespace-pre-line md:text-base">
              {profile.description}
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {sections
        .filter((section) => section.isShow)
        .map((section, index) => (
          <Fragment key={section.key}>
            <section
              id={`${section.key}`}
              className="relative scroll-mt-[var(--section-top-gap)] space-y-6"
            >
              <div className="sticky top-[var(--sticky-top)] flex flex-col gap-4">
                <div>
                  <h2 className="mb-2 flex items-center gap-2 text-2xl font-bold tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground">{section.subTitle}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.component && <section.component />}
                </div>
              </div>
            </section>

            {index !== sections.length - 2 && <Separator />}
          </Fragment>
        ))}
    </div>
  );
}
