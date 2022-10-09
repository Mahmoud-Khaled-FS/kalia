import { LogoFacebook, LogoTwitter, LogoInstagram } from 'react-ionicons';

export interface Navigation {
  id: string;
  url: string;
  title: string;
  icon?: any;
  subMenu?: Navigation[];
}

export const Social = [
  {
    id: '1',
    title: 'facebook',
    url: 'https://facebook.com',
    icon: LogoFacebook,
  },
  {
    id: '2',
    title: 'twitter',
    url: 'https://twitter.com',
    icon: LogoTwitter,
  },
  {
    id: '3',
    title: 'instegram',
    url: 'https://instagram.com',
    icon: LogoInstagram,
  },
];

export const navigation = [
  {
    id: '0',
    title: 'home',
    url: '/',
  },
  {
    id: '1',
    title: 'new arrivals',
    url: '/',
  },
  {
    id: '2',
    title: 'everyday basics',
    url: '/',
    subMenu: [
      {
        id: '1',
        title: 'tops',
        url: '/',
      },
      {
        id: '2',
        title: 'bottoms',
        url: '/',
      },
      {
        id: '3',
        title: 'dresses',
        url: '/',
      },
      {
        id: '4',
        title: 'kintwear',
        url: '/',
      },
    ],
  },
  {
    id: '3',
    title: 'bodywear',
    url: '/',
    subMenu: [
      {
        id: '1',
        title: 'multi packs',
        url: '/',
      },
      {
        id: '2',
        title: 'tops',
        url: '/',
      },
      {
        id: '3',
        title: 'bottoms',
        url: '/',
      },
      {
        id: '4',
        title: 'bodysuits',
        url: '/',
      },
      {
        id: '5',
        title: 'shapewear',
        url: '/',
      },
    ],
  },
  {
    id: '4',
    title: 'loungywear',
    url: '/',
    subMenu: [
      {
        id: '1',
        title: 'sets',
        url: '/',
      },
      {
        id: '2',
        title: 'tops',
        url: '/',
      },
      {
        id: '3',
        title: 'bottoms',
        url: '/',
      },
    ],
  },
  {
    id: '5',
    title: 'underwear',
    url: '/',
    subMenu: [
      {
        id: '1',
        title: 'bras',
        url: '/',
      },
      {
        id: '2',
        title: 'panties',
        url: '/',
      },
      {
        id: '3',
        title: 'shapewear',
        url: '/',
      },
      {
        id: '4',
        title: 'slips',
        url: '/',
      },
    ],
  },
  {
    id: '6',
    title: 'sleapwear',
    url: '/',
    subMenu: [
      {
        id: '1',
        title: 'lingerie',
        url: '/',
      },
      {
        id: '2',
        title: 'pyjamas',
        url: '/',
      },
      {
        id: '3',
        title: 'nightgowns',
        url: '/',
      },
    ],
  },
  {
    id: '7',
    title: 'accessories',
    url: '/',
  },
  {
    id: '8',
    title: 'sale',
    url: '/',
  },
];
