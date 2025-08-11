import ContactSection from '../_components/ContactSection';
import StackSection from '../_components/StackSection';

interface Section {
  key: string;
  title: string;
  subTitle: string;
  path: string;
  icon: string;
  component: React.ReactNode;
}

export const sections = [
  {
    key: 'links',
    title: '링크',
    subTitle: '저와 관련한 링크들입니다.',
    path: '/#links',
    icon: 'link',
    component: ContactSection,
  },
  {
    key: 'skills',
    title: '기술 스택',
    subTitle: '현재 사용하고 있는 주요 기술들입니다.',
    path: '/#skills',
    icon: 'code',
    component: StackSection,
  },
];
