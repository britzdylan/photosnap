// export const useCounter = () => useState<number>('counter', () => 0)

export const useNavigation = () =>
  useState<TNavigation>('navigation', () => {
    const { navigation } = useAppConfig();
    const { shared, footer } = navigation;
    return {
      header: shared,
      footer: {
        ...footer,
        links: [...footer.links, ...shared.links],
      },
    };
  });

export const useLayout = () =>
  useState<Layout>('layout', () => useAppConfig().layout);

export const useHome = () =>
  useState<Home>('home', () => useAppConfig().pages['home']);

export const useFeatures = () =>
  useState<Features>('features', () => useAppConfig().pages['features']);

export const usePricing = () =>
  useState<Pricing>('pricing', () => useAppConfig().pages['pricing']);

// Base interface for common block properties
interface BaseBlock {
  title: string;
  subtitle: string;
  image: string;
}

// Extended interface for Home blocks, with an additional 'cta' property
interface HomeBlock extends BaseBlock {
  cta: {
    text: string;
    href: string;
  };
}

// Interface for the 'home' section
export interface Home {
  blocks: HomeBlock[];
}

// Interface for the 'features' section, using the base block structure
export interface Features {
  blocks: BaseBlock[];
}

// Interface for the 'pricing' section, using the base block structure
export interface Pricing {
  blocks: BaseBlock[];
}

export interface Layout {
  callToAction: {
    title: string;
    cta: {
      text: string;
      href: string;
    };
    image: string;
  };
}

export interface TNavigation {
  header: {
    logo: {
      src: string;
      alt: string;
      href: string;
    };
    links: {
      text: string;
      href: string;
    }[];
    cta: {
      text: string;
      href: string;
    };
  };
  footer: {
    social: {
      icon: string;
      href: string;
    }[];
    links: {
      text: string;
      href: string;
    }[];
  };
}
