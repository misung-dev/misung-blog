import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sections } from '../about/sections';
import SectionIcon from './SectionIcon';

export default function SectionIndex() {
  return (
    <Card>
      <CardHeader className="gap-0 px-4">
        <CardTitle>목차</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex flex-col gap-2">
          {sections.map((section) => (
            <a href={`/about/${section.path}`} key={section.key}>
              <div className="text-muted-foreground hover:bg-muted-foreground/10 flex items-center gap-2 rounded-md p-1.5 text-sm transition-colors">
                <SectionIcon icon={section.icon} />
                <span>{section.title}</span>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
