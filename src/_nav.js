import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilAirplay, cilDrop, cilPencil } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
  },
  {
    component: CNavTitle,
    name: 'Posts',
  },
  {
    component: CNavItem,
    name: 'All Posts',
    to: '/posts',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Add New',
    to: '/add',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Preview',
    to: '/preview',
    icon: <CIcon icon={cilAirplay} customClassName="nav-icon" />,
  },
]

export default _nav
