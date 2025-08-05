import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Github, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/misung-dev',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/misungdev',
  },

  {
    icon: Instagram,
    href: 'https://www.instagram.com/ryumnii',
  },
];

export default function ProfileSection() {
  return (
    <Card>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-muted rounded-full p-2">
              <div className="h-34 w-34 overflow-hidden rounded-full">
                <Image
                  src="/images/profile-light.png"
                  alt="프로필 이미지"
                  width={144}
                  height={144}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold">류미성</h3>
            <p className="text-muted-foreground text-sm">Frontend Developer</p>
          </div>

          <div className="flex justify-center gap-2">
            {socialLinks.map((item, index) => (
              <Button key={index} variant="ghost" className="bg-primary/10" size="icon" asChild>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          <p className="bg-primary/10 rounded p-2 text-center text-sm">Keep Coding 🛼</p>
        </div>
      </CardContent>
    </Card>
  );
}
