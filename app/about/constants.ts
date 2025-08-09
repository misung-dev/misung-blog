export const profile = {
  name: '류미성',
  title: '프론트엔드 개발자',
  description:
    '사용자 경험을 끊임없이 고민하는 프론트엔드 개발자입니다.\n직관적인 인터페이스를 구현하고, 재사용성과 효율성을 갖춘 코드를 작성하기 위해 노력합니다.',
};

export const skills = [
  'JavaScript',
  'React',
  'TypeScript',
  'Next.js',
  'emotion',
  'styled-components',
  'Tailwind CSS',
];

export interface Highlight {
  text: string;
  tag: '개발' | '이슈해결' | '기타';
  links?: {
    type: string;
    url: string;
  }[];
}
