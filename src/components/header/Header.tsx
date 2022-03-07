import {Layout, Avatar, Image, Input, Space} from 'antd'
import { AudioOutlined, BellOutlined, MailOutlined, SearchOutlined } from '@ant-design/icons';
import './Header.css'

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

export const Header = () => {
    return (
        <div>
            <div className='header'>
              
              <Image className='header_img'
                    src='./insight.png'
                />
                <Input className='header_search' placeholder="Tìm kiếm" />
                <MailOutlined className='header_icon--mail' />
                <BellOutlined className='header_icon--notification' />
                <Avatar className='header_avatar' src='./db.png' />
            </div>
        </div>
    )
}