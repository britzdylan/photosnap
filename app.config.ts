export default defineAppConfig({
  title: 'Photosnap',
  navigation: {
    header: {
      logo: {
        src: '/images/shared/logo.svg',
        alt: 'Photosnap logo',
        href: '/',
      },
      links: [
        { text: 'Stories', href: '/stories' },
        { text: 'Features', href: '/features' },
        { text: 'Pricing', href: '/pricing' },
      ],
      cta: {
        text: 'Get an invite',
        href: '/invite',
      },
    },
  },
});
