import {AiFillSetting} from 'react-icons/ai'
import {TbBrandBooking} from 'react-icons/tb'
import {BsPeople} from 'react-icons/bs'
import {MdPeopleOutline,MdOutlinePeopleOutline,MdOutlineAdminPanelSettings} from 'react-icons/md'
import {SiGoogleclassroom} from 'react-icons/si'
import {FcTodoList} from 'react-icons/fc'
import {GrUserAdmin} from 'react-icons/gr'
export const links =[
    {
        title:'Dashboard',
        links:[
            {
                name:'Dashboard',
                icon:<MdOutlineAdminPanelSettings/>
            }
        ]
    },
    {
        title:'Pages',
        links:[
            {
                name:'Bookings',
                icon:<TbBrandBooking/>
            },
            {
                name:'Occupants',
                icon:<BsPeople/>
            },
            {
                name:'Users',
                icon:<MdPeopleOutline/>
            },
            {
                name:'Employees',
                icon:<MdOutlinePeopleOutline/>
            },
            {
                name:'Rooms',
                icon:<SiGoogleclassroom/>
            },
            {
                name:'AdminProfile',
                icon:<GrUserAdmin/>
            },
            {
                name:'Reminders',
                icon:<FcTodoList/>
            },
        ],
    }
]

