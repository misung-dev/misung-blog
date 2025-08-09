import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const contact = {
  github: {
    icon: Github,
    url: 'https://github.com/misung-dev',
  },
  linkedin: {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/misung-dev/',
  },
  instagram: {
    icon: Instagram,
    url: 'https://www.instagram.com/ryumnii/',
  },
  email: {
    icon: Mail,
    url: 'misung.dev@gmail.com',
  },
};

export default function ContactSection() {
  return (
    <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
      {Object.entries(contact).map(([key, { icon: Icon, url }]) => {
        const displayName = getDisplayName(key);
        const isEmail = key === 'email';

        if (isEmail) {
          return (
            <div key={key} className="flex items-center gap-1">
              <Icon className="h-4 w-4" />
              <span>{url}</span>
            </div>
          );
        }

        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary flex items-center gap-1 transition-colors"
          >
            <Icon className="h-4 w-4" />
            <span>{displayName}</span>
          </a>
        );
      })}
    </div>
  );
}

function getDisplayName(key: string): string {
  const displayNames: Record<string, string> = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    email: 'Email',
  };

  return displayNames[key] || key;
}
