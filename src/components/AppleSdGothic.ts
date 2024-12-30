import localFont from 'next/font/local';

const appleSdGothic = localFont({
  src: [
    {
      path: '../../public/fonts/AppleSDGothicNeo-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AppleSDGothicNeo-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AppleSDGothicNeo-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export default appleSdGothic;
