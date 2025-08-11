import { Project } from '../data';

export default function ProjectHighlight({ project }: { project: Project }) {
  return (
    <ul className="space-y-2">
      {project.highlights.map((highlight, index) => (
        <li key={index} className="flex gap-2">
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
  );
}
