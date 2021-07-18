import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as CgIcons from 'react-icons/cg';
import * as VscIcons from 'react-icons/vsc';

export const SidebarData = [
  {
    title: 'Home',
    selected: true,
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Recent',
    path: '/recent',
    icon: <IoIcons.IoIosArrowDroprightCircle />,
  },
  {
    title: 'New',
    path: '/new',
    icon: <VscIcons.VscNewFile />
  },
  {
    title: 'Playlist',
    path: '/playlist',
    icon: <FaIcons.FaFileDownload />
  },
  {
    title: 'Bookmarks',
    path: '/bookmarks',
    icon: <IoIcons.IoMdBookmarks />,
  },
  // rule here
  {
    title: 'Coding',
    path: '/coding',
    icon: <IoIcons.IoIosCode />
  },
  {
    title: 'Mathematics',
    path: '/maths',
    icon: <CgIcons.CgMathDivide />
  },
  {
    title: 'Science',
    path: '/science',
    icon: <FaIcons.FaMicroscope />
  },
  {
    title: 'History',
    path: '/history',
    icon: <FaIcons.FaScroll />
  }
];