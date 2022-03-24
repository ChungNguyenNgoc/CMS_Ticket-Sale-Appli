
import { FilterOutlined } from '@ant-design/icons';
import {Layout, Input, Button, Table, Tag, Radio, Space, DatePicker, Checkbox, Divider, Modal} from 'antd';
import moment from 'moment';
import { useState } from 'react';
import '../ticketmanage/TicketManage.css';
import {GoPrimitiveDot} from 'react-icons/go';
import {BsThreeDotsVertical} from 'react-icons/bs';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Cổng 1', 'Cổng 2', 'Cổng 3', 'Cổng 4',  'Cổng 5'];
const defaultCheckedList = ['Cổng 1', 'Cổng 2'];


const { Content } = Layout;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const dataSource = [
    {
        stt: '1',
        bookingCode: 'ALT20210501',
        ticketNumber: '123456789034',
        eventName: 'Hội chợ triển lãm tiêu dùng 2021',
        tags: ['Đã sử dụng'],
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkInGate: 'Cổng 1',
        changeDate: '',
    },
    {
        stt: '1',
        bookingCode: 'ALT20210501',
        ticketNumber: '123456789034',
        eventName: 'Hội chợ triển lãm tiêu dùng 2021',
        tags: ['Chưa sử dụng'],
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkInGate: 'Cổng 1',
        changeDate: '',
    },
    {
        stt: '1',
        bookingCode: 'ALT20210501',
        ticketNumber: '123456789034',
        eventName: 'Hội chợ triển lãm tiêu dùng 2021',
        tags: ['Hết hạn'],
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkInGate: 'Cổng 1',
        changeDate: '',
    },

];
  
const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Booking code',
        dataIndex: 'bookingCode',
        key: 'bookingCode',
    },
    {
        title: 'Số vé',
        dataIndex: 'ticketNumber',
        key: 'ticketNumber',
    },
    {
        title: 'Tên sự kiện',
        dataIndex: 'eventName',
        key: 'eventName',
    },
    {
        title: 'Tình trạng sử dụng',
        dataIndex: 'tags',
        key: 'tags',
        render: (tags: any) => (
        <>
            {tags.map((tag: any) => {
            let color =  '';
            if (tag === 'Đã sử dụng') {
                color = 'geekblue';
            } else if (tag === 'Chưa sử dụng') {
                color = 'green';
            } else if (tag === 'Hết hạn') {
                color = 'red';
            }
            return (
                <Tag color={color} key={tag}>
                    <GoPrimitiveDot />{tag.toUpperCase()}
                </Tag>
            );
            })}
        </>
        ),
        
        
    },
    {
        title: 'Ngày sử dụng',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Ngày xuất vé',
        dataIndex: 'releaseDate',
        key: 'releaseDate',
    },
    {
        title: 'Cổng check-in',
        dataIndex: 'checkInGate',
        key: 'checkInGate',
    },
    {
        title: '',
        dataIndex: 'changeDate',
        key: 'changeDate',
        render: (changeDate: any) => (
            <>
                <ModalChangeDate key={changeDate} />
            </>
        )
    },
];

const ModalChangeDate = () => {
    const [value, setValue] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleOk = () => {
        setIsModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    const onChangeRadio = (e: any) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChangeCheckbox = (list: any) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e: any) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <>
            <BsThreeDotsVertical onClick={showModal} style={{cursor: 'pointer'}}/>

            <Modal width={'782px'} footer={null} visible={isModalVisible} onCancel={handleCancel}>
                <Content className="content-ticketmanage_modal-changedate">
                    <h3 className="content-ticketmanage_modal-changedate_header">Đổi ngày sử dụng vé</h3>
                    <span className="content-ticketmanage_modal-changedate_tickettitle">Số vé</span>
                    <span className="content-ticketmanage_modal-changedate_ticketcode">PKG20210502</span>
                    <span className="content-ticketmanage_modal-changedate_ticketevent">Số vé</span>
                    <span className="content-ticketmanage_modal-changedate_gateevent">Vé cổng - Gói sự kiện</span>
                    <span className="content-ticketmanage_modal-changedate_nameevent">Tên sự kiện</span>
                    <span className="content-ticketmanage_modal-changedate_nameeventcode">Hội trợ triển lãm hàng tiêu dùng 2021</span>
                    <span className="content-ticketmanage_modal-changedate_expiry">Hạn sử dụng</span>
                    <Space className="content-ticketmanage_modal-changedate_todate-expirycalender" direction="vertical" size={12}>
                        <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                    </Space>,
                    <Button onClick={handleCancel} className="content-ticketmanage_modal-changedate_btncancel">Hủy</Button>
                    <Button onClick={handleOk} className="content-ticketmanage_modal-changedate_btnsave">Lưu</Button>
                </Content>
            </Modal>
        </>
    )
}

export const TicketManage = () => {
    const [value, setValue] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleOk = () => {
        setIsModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    const onChangeRadio = (e: any) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChangeCheckbox = (list: any) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e: any) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    return (
        <div>
            <Layout className="layout_content-ticketmanage">
                <Content className="content-ticketmanage">
                    <h2 className="content-ticketmanage_title">Danh sách vé</h2>
                    <div className="content-ticketmanage_category">
                        <Input className="content-ticketmanage_category-search" placeholder='Tìm bảng số vé'/>
                        <Button 
                            icon={<FilterOutlined className="content-ticketmanage_category-filter--icon" />}  
                            className="content-ticketmanage_category-filter"
                            onClick={showModal}
                            >
                            Lộc vé
                        </Button>
                        <Button className="content-ticketmanage_category-export">Xuất file (.csv)</Button>
                    </div>
                    <Table className='content-ticketmanage_table' dataSource={dataSource} columns={columns} />

                    <Modal width={'658px'} footer={null} visible={isModalVisible} onCancel={handleCancel}>
                        <Content className="content-ticketmanage_modal-filter">
                            <h3 className="content-ticketmanage_modal-filter_header">Lọc vé</h3>
                            <span className="content-ticketmanage_modal-filter_fromdate">Từ ngày</span>
                            <span className="content-ticketmanage_modal-filter_todate">Đến ngày</span>
                            <Space className="content-ticketmanage_modal-filter_fromdate-calender" direction="vertical" size={12}>
                                <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                            </Space>
                            <Space className="content-ticketmanage_modal-filter_todate-calender" direction="vertical" size={12}>
                                <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                            </Space>
                            <span className="content-ticketmanage_modal-filter_status">Tình trạng sử dụng</span>
                            <Radio.Group className="content-ticketmanage_modal-filter_radio" onChange={onChangeRadio} value={value}>
                                <Radio value={1}>Tất cả</Radio>
                                <Radio value={2}>Đã sử dụng</Radio>
                                <Radio value={3}>Chưa sử dụng</Radio>
                                <Radio value={4}>Hết hạn</Radio>
                            </Radio.Group>
                            <span className="content-ticketmanage_modal-filter_check">Cổng Check-in</span>
                            <div className="content-ticketmanage_modal-filter_checkin">
                                <>
                                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                                        Tất cả
                                    </Checkbox>
                                    <Divider />
                                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChangeCheckbox} />
                                </>
                            </div>
                            <Button 
                                className="content-ticketmanage_modal-filter_btn"
                                onClick={handleOk}
                                >
                                    Lọc
                            </Button>
                        </Content>
                    </Modal>  
                </Content>
            </Layout>
        </div>
    )
}