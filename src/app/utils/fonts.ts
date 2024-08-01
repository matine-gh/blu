import localFont from 'next/font/local';

export const iransans = localFont({
  src: [
    {
      path: '../../../public/fonts/iransans/IRANSansX-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/iransans/IRANSansX-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/iransans/IRANSansX-DemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/iransans/IRANSansX-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/iransans/IRANSansX-Black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
})