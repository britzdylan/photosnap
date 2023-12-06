export default defineAppConfig({
  title: 'Photosnap',
  navigation: {
    shared: {
      logo: {
        src: 'logo/dark.svg',
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
        href: '/',
      },
    },
    footer: {
      links: [{ text: 'Home', href: '/' }],
      logo: {
        src: 'logo/light.svg',
        alt: 'Photosnap logo',
        href: '/',
      },
      social: [
        {
          icon: 'Facebook',
          href: 'https://www.facebook.com',
        },
        {
          icon: 'Youtube',
          href: 'https://www.youtube.com',
        },
        {
          icon: 'twitter',
          href: 'https://www.twitter.com',
        },
        {
          icon: 'Pinterest',
          href: 'https://www.pinterest.com',
        },
        {
          icon: 'Instagram',
          href: 'https://www.instagram.com',
        },
      ],
    },
  },
  layout: {
    callToAction: {
      title: 'We’re in beta. Get your invite today!',
      cta: {
        text: 'Get an invite',
        href: '/',
      },
      image: 'rocks.png',
    },
  },
  pages: {
    home: {
      blocks: [
        {
          title: 'Create and share your photo stories.',
          subtitle:
            'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
          cta: {
            text: 'Get an invite',
            href: '/',
          },
          image: 'pier.png',
        },
        {
          title: 'BEAUTIFUL STORIES EVERY TIME',
          subtitle:
            'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
          cta: {
            text: 'Veiw the stories',
            href: '/stories',
          },
          image: 'laptop.png',
        },
        {
          title: 'DESIGNED FOR EVERYONE',
          subtitle:
            'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.',
          cta: {
            text: 'Veiw the stories',
            href: '/stories',
          },
          image: 'cameraman.png',
        },
      ],
    },
    features: {
      blocks: [
        {
          title: 'Features',
          subtitle:
            'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
          image: 'camera_leg.png',
        },
      ],
    },
    pricing: {
      blocks: [
        {
          title: 'Pricing',
          subtitle:
            'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
          image: 'silouete.png',
        },
      ],
    },
  },
});
