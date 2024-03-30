import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'hyezzang devlog',
  description:
    'hyezzang 개발블로그 입니다. 세상에서 가장 빠르게 최신 개발 트렌드를 확인해보세요.',
  openGraph: {
    title: 'hyezzang devlog',
    description:
      'hyezzang 개발블로그 입니다. 세상에서 가장 빠르게 최신 개발 트렌드를 확인해보세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://hyezzang.com',
    siteName: 'hyezzang devlog',
    images: [
      {
        url: 'https://hyezzang.com/assets/images/hyezzang.png',
        width: 1074,
        height: 674,
        alt: 'hyezzang devlog',
        secureUrl: 'https://hyezzang.com/assets/images/hyezzang.png',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    handle: 'hyezzang',
    site: 'https://hyezzang.com',
    cardType: 'summary_large_image'
  }
};

export default config;
