export const profile = {
  name: '류미성',
  title: '프론트엔드 개발자',
  description:
    '사용자 경험을 끊임없이 고민하는 프론트엔드 개발자입니다.\n직관적인 인터페이스를 구현하고, 재사용성과 효율성을 갖춘 코드를 작성하기 위해 노력합니다.',
};

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'styled-components',
  'Tailwind CSS',
];

export interface ProjectHighlight {
  text: string;
  links?: Array<{
    label: string;
    slug: string;
  }>;
}

export interface Project {
  title: string;
  period: string;
  techStack: string[];
  highlights: ProjectHighlight[];
  projectLinks?: {
    github?: string;
    website?: string;
  };
}

export const internships: Project[] = [
  {
    title: '(주) 구름',
    period: '2024.12.23 ~ 2025.06.30 (6개월)',
    techStack: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'ChatGPT API',
      'Socket.io',
      'Storybook',
    ],
    highlights: [
      {
        text: "'ChatGPT API'를 활용해 맞춤형 '오늘의 운세'를 자동 전송하는 Slack 봇 구현 및 런칭",
        links: [
          {
            label: '회고',
            slug: 'slack-fortune-bot-1',
          },
          {
            label: '이슈 해결',
            slug: 'slack-fortune-bot-2',
          },
        ],
      },
      {
        text: 'Zoom 모니터링 자동화 프로그램 개발 및 런칭',
        links: [
          {
            label: '사용성 개선1',
            slug: 'monitoring-automation-3',
          },
          {
            label: '사용성 개선2',
            slug: 'monitoring-automation-4',
          },
        ],
      },
      {
        text: 'Arkain 서비스 개발에 참여 등',
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: '숙명인을 위한 커뮤니티, 스노로즈	',
    period: '2024.06 ~ 현재',
    techStack: ['JavaScript', 'React', 'Cloudflare', 'React-Query'],
    highlights: [
      {
        text: 'DAU 2,200명의 사용자를 보유한 커뮤니티 서비스의 차세대 기술 전환(WordPress → React)과 UI/UX 리뉴얼에 참여',
      },
      {
        text: '마이페이지 (회원 정보 수정, 보유 포인트 조회, 작성 글/댓글 조회, 회원 탈퇴 등) 구현',
      },
      {
        text: '테스트맵을 기반으로 다양한 기기와 사용 환경에서 알파·베타 테스트를 진행하며 서비스 안정화에 기여',
        links: [
          {
            slug: 'snorose-renewal-review',
            label: '회고',
          },
        ],
      },
      {
        text: '리뉴얼 만족도 조사 결과, 리뉴얼 후 만족도 2.98 → 4.80 상승',
        links: [
          {
            slug: 'snorose-renewal-satisfaction-survey',
            label: '회고',
          },
        ],
      },
    ],
    projectLinks: {
      github: 'https://github.com/snorose/snorose-front-react',
      website: 'https://www.snorose.com/',
    },
  },
  {
    title: '내 손 안에 간편한 행사 관리 시스템, 체크메이트',
    period: '2024.05 ~ 2024.09 (5개월)',
    techStack: ['JavaScript', 'React', 'Styled-components', 'Recoil', 'npm', 'Vercel'],
    highlights: [
      {
        text: '참석자 출석체크 페이지 구현 (학번 입력, 서명, 출석 확인 완료 모달)',
      },
      {
        text: '어드민 페이지 내 대시보드 페이지 구현',
      },
      {
        text: 'Chart.js를 사용한 행사별 통계 페이지 구현',
      },
      {
        text: 'React 라이브러리 react-signature-canvas를 사용하여 전자 서명 터치 패드 기능 구현',
      },
      {
        text: '행사 목록 페이지 및 검색 기능 구현',
      },
    ],
    projectLinks: {
      github: 'https://github.com/CheckMate-sookmyung',
      website: 'https://check-mate-sookmyung-check-mate-sookmyung.vercel.app/',
    },
  },
  {
    title: 'Notion API를 활용한 개인 블로그',
    period: '2025.07 ~ 2025.08 (1개월)',
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Notion API'],
    highlights: [
      {
        text: 'Notion API 연동을 통한 블로그 구현',
      },
      {
        text: '무한 스크롤 구현',
      },
    ],
    projectLinks: {
      github: 'https://github.com/misung-dev/misung-blog',
      website: 'https://misung.dev',
    },
  },
];
