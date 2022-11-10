import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'byseop devlog',
  description:
    '프론트엔드 개발자 byseop 개발블로그 입니다. 세상에서 가장 빠르게 최신 개발 트렌드를 확인해보세요.',
  openGraph: {
    title: 'byseop devlog',
    description:
      '프론트엔드 개발자 byseop 개발블로그 입니다. 세상에서 가장 빠르게 최신 개발 트렌드를 확인해보세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://byseop.com',
    siteName: 'byseop devlog',
    images: [
      {
        url: 'https://byseop.com/assets/images/byseop.jpeg',
        width: 1074,
        height: 674,
        alt: 'byseop devlog',
        secureUrl: 'https://byseop.com/assets/images/byseop.jpeg',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    handle: 'byseop',
    site: 'https://byseop.com',
    cardType: 'summary_large_image'
  }
};

export default config;
