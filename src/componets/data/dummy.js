import {AiFillSetting,AiOutlineUserSwitch} from 'react-icons/ai'
export const links =[
    {
        title:'Dashboard',
        links:[
            {
                name:'Dashboard',
                icon:<AiFillSetting/>
            }
        ]
    },
    {
        title:'Pages',
        links:[
            {
                name:'Bookings',
                icon:<AiFillSetting/>
            },
            {
                name:'Employees',
                icon:<AiFillSetting/>
            },
            {
                name:'Messages',
                icon:<AiFillSetting/>
            },
        ],
    }
]
export const sidedata = [
    {
        title:'Dashboard',
        path:'/',
        icon:<AiOutlineUserSwitch/>,
        cName:'nav-text'
    },
    {
        title:'Bookings',
        path:'/bookings',
        icon:<AiOutlineUserSwitch/>,
        cName:'nav-text'
    },
    {
        title:'Occupants',
        path:'/occupants',
        icon:<AiOutlineUserSwitch/>,
        cName:'nav-text'
    },
    {
        title:'Employees',
        path:'/employees',
        icon:<AiOutlineUserSwitch/>,
        cName:'nav-text'
    },
    {
        title:'Rooms',
        path:'/rooms',
        icon:<AiOutlineUserSwitch/>,
        cName:'nav-text'
    },
    {
        title:'Users',
        path:'/users',
        icon:<AiOutlineUserSwitch/>,
        cName:'nav-text'
    }
]
