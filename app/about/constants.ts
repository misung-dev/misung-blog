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

export interface Project {
  title: string;
  description: string;
  period: string;
  techStack: string[];
  highlights: string[];
  links?: {
    github?: string;
    website?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    title: '개인 블로그',
    description: 'Notion API와 Next.js를 활용한 개인 블로그',
    period: '2025.08 - 현재',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Notion API'],
    highlights: ['Notion API 연동을 통한 블로그 구현', 'Infinite Scroll 페이지네이션 구현'],
    links: {
      github: 'https://github.com/misung-dev/misung-blog',
      website: 'https://misung.dev',
    },
  },
  {
    title: '스노로즈',
    description: '숙명여자대학교 재학생, 졸업생을 위한 커뮤니티 웹 서비스',
    period: '2024.06 - 현재',
    techStack: ['React', 'JavaScript', 'Cloudflare', 'React-Query'],
    highlights: [
      'DAU 2,200명 규모 커뮤니티 서비스의 차세대 기술 전환(WordPress → React)과 UI/UX 리뉴얼에 참여',
      '마이페이지 (회원 정보 수정, 보유 포인트 조회, 작성 글/댓글 조회, 회원 탈퇴 등) 구현',
      '신고하기 기능 구현',
    ],
    links: {
      github: 'https://github.com/snorose/snorose-front-react',
      website: 'https://www.snorose.com/',
    },
  },
];
