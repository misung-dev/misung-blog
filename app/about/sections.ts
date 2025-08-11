import ContactSection from '../_components/ContactSection';
import StackSection from '../_components/StackSection';
import InternshipSection from '../_components/InternshipSection';
import ProjectsSection from '../_components/ProjectsSection';
import { Briefcase, Code2, FolderOpen, Link, LucideIcon, User } from 'lucide-react';

interface Section {
  key: string;
  title: string | null;
  subTitle: string | null;
  path: string;
  icon: LucideIcon;
  component: React.ComponentType | null;
  isShow: boolean;
}

export const sections: Section[] = [
  {
    key: 'intro',
    title: '소개',
    subTitle: null,
    path: '#intro',
    icon: User,
    component: null,
    isShow: false,
  },
  {
    key: 'links',
    title: '링크',
    subTitle: '저와 관련한 링크들입니다.',
    path: '#links',
    icon: Link,
    component: ContactSection,
    isShow: true,
  },
  {
    key: 'skills',
    title: '기술 스택',
    subTitle: '현재 사용하고 있는 주요 기술들입니다.',
    path: '#skills',
    icon: Code2,
    component: StackSection,
    isShow: true,
  },
  {
    key: 'internships',
    title: '인턴 이력',
    subTitle: '인턴십 기간 동안 진행한 주요 프로젝트를 소개합니다.',
    path: '#internships',
    icon: Briefcase,
    component: InternshipSection,
    isShow: true,
  },
  {
    key: 'projects',
    title: '프로젝트',
    subTitle: '진행했던 주요 프로젝트들을 소개합니다.',
    path: '#projects',
    icon: FolderOpen,
    component: ProjectsSection,
    isShow: true,
  },
];
