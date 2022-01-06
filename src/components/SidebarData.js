import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as IconName  from "react-icons/ai";
// import { IconName } from "react-icons/md";

export const SidebarData = [
  {
    path: '/',
    icon: <IconName.AiOutlineSearch />,
    cName: 'nav-text'
  },
  {
    path: '/home',
    icon: <IconName.AiFillHome />,
    cName: 'nav-text'
  },
  {
    path: '/video',
    icon: <IconName.AiOutlineVideoCamera />,
    cName: 'nav-text'
  },
  {
    path: '/moniter',
     icon: <IconName.AiFillUsb />,
    cName: 'nav-text'
  },
  {
    path: '/printer',
    icon: <IconName.AiFillPrinter/>,
    cName: 'nav-text'
  },
  {
    path: '/rocket',
    icon: <IconName.AiFillRocket />,
    cName: 'nav-text'
  },
  {
    path: '/record',
    icon: <IconName.AiOutlineAudioMuted />,
    cName: 'nav-text'
  },
  {
    path: '/music',
    icon: <IconName.AiTwotoneCustomerService />,
    cName: 'nav-text'
  }
];
