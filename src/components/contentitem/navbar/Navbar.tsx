import {Layout, Menu} from 'antd';
import {EditOutlined, FolderAddOutlined, HomeOutlined, SettingOutlined, ShakeOutlined} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import './Navbar.css'
const {Sider} = Layout;

const MenuList = [
    {
        title: 'Trang chủ',
        icon: <HomeOutlined className='navbar_icon'/>,
    },
    {
        title: 'Quản lý vé',
        icon: <ShakeOutlined className='navbar_icon'/>,
    },
    {
        title: 'Đối soát vé',
        icon: <FolderAddOutlined className='navbar_icon'/>,
    },
    {
        title: 'Cài đặt',
        icon: <SettingOutlined className='navbar_icon'/>,
    },
    {
        title: 'Gói dịch vụ',
        icon: '',
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
                        <Menu.Item className='navbar_item' icon={menu.icon} key={index}>{menu.title}</Menu.Item>
                    ))}
                    
                </Menu>
            </Sider>
        </div>
    )
}