import {Layout, Menu} from 'antd';
import {EditOutlined, FolderAddOutlined, HomeOutlined, SettingOutlined, ShakeOutlined} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import './Navbar.css'
import { Link } from 'react-router-dom';
const {Sider} = Layout;

const MenuList = [
    {
        title: 'Trang chủ',
        icon: <HomeOutlined className='navbar_icon'/>,
        link: 'home',
    },
    {
        title: 'Quản lý vé',
        icon: <ShakeOutlined className='navbar_icon'/>,
        link: 'ticketmanage',
    },
    {
        title: 'Đối soát vé',
        icon: <FolderAddOutlined className='navbar_icon'/>,
        link: 'ticketchange',
    }, 
    {
        title: 'Cài đặt',
        icon: <SettingOutlined className='navbar_icon'/>,
        link: 'setting'
    },
    {
        title: 'Gói dịch vụ',
        icon: '',
        link: 'service'

    },
]

export const Navbar = () => {
    return (
        <div style={{background: '#f9f6f4'}}>
            <Sider className='navbar'>
                <Menu
                defaultSelectedKeys={['Dashboard']}
                mode='inline'
                className='navbar_list'
                >
                    {MenuList.map((menu, index) => (
                        <Menu.Item className='navbar_item' icon={menu.icon} key={index}>
                            <Link  to={`${menu.link}`}>
                                {menu.title}
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>

            </Sider>
        </div>
    )
}