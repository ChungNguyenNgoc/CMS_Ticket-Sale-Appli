
import { FilterOutlined, EditOutlined } from '@ant-design/icons';
import {Layout, Input, Button, Table, Tag, Radio, Space, DatePicker } from 'antd';
import { useState } from 'react';
import './TicketChange.css'
import moment from 'moment';
const { Content } = Layout;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

export const TicketFilter = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: any) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    return (
        <div>
            <Content className="content-ticketfilter">
                <h3 className="content-ticketfilter_header">Lọc vé</h3>
                <span className="content-ticketfilter_status">Tình trạng đổi soát</span>
                <Radio.Group className="content-ticketfilter_radio" onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={1}>Tất cả</Radio>
                        <Radio value={2}>Đã đổi soát</Radio>
                        <Radio value={3}>Chưa đổi soát</Radio>
                    </Space>
                </Radio.Group>
                <span className="content-ticketfilter_type">Loại vé</span>
                <span className="content-ticketfilter_nametype">Vé cổng</span>
                <span className="content-ticketfilter_fromdate">Từ ngày</span>
                <Space className="content-ticketfilter_fromdate-calender" direction="vertical" size={12}>
                    <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                </Space>
                <span className="content-ticketfilter_todate">Đến ngày</span>
                <Space className="content-ticketfilter_todate-calender" direction="vertical" size={12}>
                    <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                </Space>
                <Button className="content-ticketfilter_btn">Lọc</Button>
            </Content>
        </div>
    )
}