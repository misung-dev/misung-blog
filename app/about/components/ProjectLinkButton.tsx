import { ExternalLink, Github } from 'lucide-react';

interface ProjectLinkButtonProps {
  links: {
    github?: string;
    website?: string;
  };
}

const linkTypes = [
  { type: 'github', label: 'GitHub', icon: Github },
  { type: 'website', label: '웹사이트', icon: ExternalLink },
];

export default function ProjectLinkButton({ links }: ProjectLinkButtonProps) {
  return (
    <div className="flex gap-4">
      {linkTypes.map((item) => {
        const url = links[item.type as keyof typeof links];
        if (!url) return null;

        return (
          <a
            key={item.type}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-sm transition-colors"
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}
