import { NavLink, ThemeConfig } from './theme.interfaces';

// Define navigation links for the theme
const oceiHeaderLinks: NavLink[] = [
 {
    label: 'HEADER._home', // Translation key
    url: '/',
    isRouterLink: true
 },
 {
    label: 'HEADER._starmaps',
    id: 'starmapsDropdown',
    children: [
        { label: 'HEADER._browse_maps', url: '/search', isRouterLink: true },
        { label: 'HEADER._about_maps', url: '/about-starmaps', isRouterLink: true }
    ]
 }
];

// Export the main theme configuration object
export const OCEI_THEME_CONFIG: ThemeConfig = {
    name: 'Ocei', // This MUST match the name used in the SCSS class (theme-galaxy)
    displayName: 'OCEI Marketplace',
    isDefault: true,
    assets: {
        logoUrl: 'assets/themes/ocei/ocei-logo.png',
        jumboBgUrl: 'assets/themes/ocei/jumboBackground.png',
        cardDefaultBgUrl: 'assets/themes/ocei/cardBackground.png'
    },
    links: {
        headerLinks: oceiHeaderLinks,
        // footerLinks can be defined similarly
    },
    dashboard: {
        showFeaturedOfferings: true,
        showPlatformBenefits: false,
    }
};