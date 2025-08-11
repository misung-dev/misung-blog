import { LucideIcon } from 'lucide-react';

interface SectionIconProps {
  icon: LucideIcon;
}

export default function SectionIcon({ icon: Icon }: SectionIconProps) {
  return <Icon className="h-4 w-4" />;
}
