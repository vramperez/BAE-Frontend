import {NavLink, ThemeConfig} from './theme.interfaces';
import {environment} from "../../environments/environment";

const baeHeaderLinks: NavLink[] = [
  {
    label: 'HEADER._home',
    url: '/dashboard',
    isRouterLink: true
  },
  {
    label: 'HEADER._browse',
    id: 'searchDropdown', // ID para el toggle de Flowbite
    children: [
      { label: 'HEADER._services', url: '/search', isRouterLink: true },
      { label: 'HEADER._catalogs', url: '/catalogues', isRouterLink: true },
      { label: 'HEADER._blueprints', url: 'https://marketplace.pre.o-cei.eu/search/urn:ngsi-ld:product-offering:bd1bb611-0b9e-4e79-ba25-abf1240039e1', isRouterLink: false, openInSameTab: true }
    ]
  }
  ];


export const BAE_THEME_CONFIG: ThemeConfig = {
  name: 'BAE',
  displayName: 'BAE Default Theme',
  assets: {
    logoUrl: 'assets/themes/bae/bae-logo.svg',
    jumboBgUrl: 'assets/themes/bae/jumboBackground.png',
    cardDefaultBgUrl: 'assets/themes/bae/cardBackground.svg'
  },
  links: {
    headerLinks: baeHeaderLinks,

    linkedin: 'https://linkedin.com/company/ocean-theme-example',
    youtube: 'https://youtube.com/c/ocean-theme-example',
    twitter: 'https://twitter.com/ocean-theme-example',
  },
  dashboard: {
    showFeaturedOfferings: true,
    showPlatformBenefits: false,
  }
};
