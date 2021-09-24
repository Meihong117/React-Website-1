import React from 'react'
import { AiFillCaretDown,AiFillCaretUp,AiFillCarryOut } from "react-icons/ai";

export const menuData=[
    {title: 'About', path:'/about'},
    {title: 'Homes', path:'/homes'},
    {title: 'Rentals', path:'/rentals'},
    {title: 'DropdownNavBar', 
     path:'/dropdown', 
     icon: < AiFillCaretDown/>,
     iconOpened: <AiFillCaretUp/>,
     iconClosed:<AiFillCaretDown />,
     subNav:[
         {title: 'Users',
          path: '/dropnav',
          icon: 'AiFillCarryOut'
         },
         {title: 'Revenue',
          path: '/dropnav',
          icon: 'AiFillCarryOut'

         }
     ]
    }
]
