import { v4 } from 'uuid';

export const MENU_INFO = [
  {
    id: v4(),
    link: 'index',
    text: 'HOME'
    // color: COLORS.mercuryAccent
  },
  {
    id: v4(),
    link: '/destination',
    text: 'DESTINATION'
  },
  {
    id: v4(),
    link: '/crew',
    text: 'CREW'
  },
  {
    id: v4(),
    link: '/technology',
    text: 'TECHNOLOGY'
  }
];
