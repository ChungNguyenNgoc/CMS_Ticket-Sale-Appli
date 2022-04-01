import { FilterOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  Layout,
  Input,
  Button,
  Table,
  Tag,
  Space,
  DatePicker,
  TimePicker,
  Checkbox,
  Select,
  Modal,
} from "antd";
import moment from "moment";
import "../ticketsetting/Setting.css";
import { GoPrimitiveDot } from "react-icons/go";
import { values } from "@antv/util";
import { showTicket } from "../../../store/actions/TicketAction";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
export const Setting = () => {
  const { Content } = Layout;
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const dataSource = [
    {
      stt: "1",
      packageCode: "ALT20210501",
      ticketName: "Gói gia đình",
      date: "14/04/2021 08:00:00",
      exDate: "14/04/2021 23:00:00",
      ticketPrice: "90.000 VNĐ",
      comboPrice: "360.000 VNĐ/4 Vé",
      tags: ["Đã áp dụng"],
      update: "Cập nhật",
    },
    {
      stt: "2",
      packageCode: "ALT20210502",
      ticketName: "Gói sự kiện",
      date: "14/04/2021 08:00:00",
      exDate: "14/04/2021 23:00:00",
      ticketPrice: "100.000 VNĐ",
      comboPrice: "400.000 VNĐ/4 Vé",
      tags: ["Tắt"],
      update: "Cập nhật",
    },
  ];

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Mã gói",
      dataIndex: "packageCode",
      key: "packageCode   ",
    },
    {
      title: "Tên gói vé",
      dataIndex: "ticketName",
      key: "ticketName",
    },
    {
      title: "Ngày áp dụng",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Ngày áp hết hạn",
      dataIndex: "exDate",
      key: "exDate",
    },
    {
      title: "Giá vé",
      dataIndex: "ticketPrice",
      key: "ticketPrice",
    },
    {
      title: "Giá Combo (VNĐ/Combo)",
      dataIndex: "comboPrice",
      key: "comboPrice",
    },
    {
      title: "Tình trạng",
      dataIndex: "tags",
      key: "tags",
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = "";
            if (tag === "Đã áp dụng") {
              color = "green";
            } else if (tag === "Tắt") {
              color = "red";
            }
            return (
              <Tag color={color} key={tag}>
                <GoPrimitiveDot />
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "update",
      key: "update",
      render: (update: any) => (
        <>
          <ModalUpdate key={update} />
        </>
      ),
    },
  ];

  const { Option } = Select;

  const ModalUpdate = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    function onChange(e: any) {
      console.log(`checked = ${e.target.checked}`);
    }

    function handleChange(value: any) {
      console.log(`selected ${value}`);
    }

    return (
      <>
        <span
          onClick={showModal}
          style={{ color: "#FF993C", border: "none", cursor: "pointer" }}
        >
          <EditOutlined />
          Cập nhật
        </span>
        <Modal
          width={"784px"}
          footer={null}
          visible={isModalVisible}
          onCancel={handleCancel}
        >
          <Content className="content-setting_modal-update">
            <h3 className="content-setting_modal-update_header">
              Cập nhật thông tin gói vé
            </h3>
            <span className="content-setting_modal-update_titlecode">
              Mã sự kiện
            </span>
            <span className="content-setting_modal-update_titlestart">*</span>
            <span className="content-setting_modal-update_titlename">
              Tên sự kiện
            </span>
            <Input
              className="content-setting_modal-update_eventcode"
              placeholder="PKG20210502"
            />
            <Input
              className="content-setting_modal-update_eventname"
              placeholder="Hội chợ triển lãm hàng tiêu dùng 2021"
            />
            <span className="content-setting_modal-update_fromdate">
              Ngày áp dụng
            </span>
            <span className="content-setting_modal-update_todate">
              Ngày hết hạn
            </span>
            <Space
              className="content-setting_modal-update_fromdate-calender"
              direction="vertical"
              size={12}
            >
              <DatePicker
                defaultValue={moment("01/01/2015", dateFormatList[0])}
                format={dateFormatList}
              />
            </Space>
            <TimePicker
              className="content-setting_modal-update_fromtime-calender"
              defaultValue={moment("12:08:23", "HH:mm:ss")}
            />
            <Space
              className="content-setting_modal-update_todate-calender"
              direction="vertical"
              size={12}
            >
              <DatePicker
                defaultValue={moment("01/01/2015", dateFormatList[0])}
                format={dateFormatList}
              />
            </Space>
            <TimePicker
              className="content-setting_modal-update_totime-calender"
              defaultValue={moment("12:08:23", "HH:mm:ss")}
            />
            <span className="content-setting_modal-update_pricetitle">
              Giá vé áp dụng
            </span>
            <Checkbox
              className="content-setting_modal-update_checkbox"
              onChange={onChange}
            >
              Vé lẻ (vnđ/vé) với giá
            </Checkbox>
            <Input
              className="content-setting_modal-update_priceinput"
              placeholder="Giá vé"
            />
            <span className="content-setting_modal-update_oneticket">
              {" "}
              / vé
            </span>
            <Checkbox
              className="content-setting_modal-update_combocheckbox"
              onChange={onChange}
            >
              Combo vé với giá
            </Checkbox>
            <Input
              className="content-setting_modal-update_combopriceinput"
              placeholder="Giá vé"
            />
            <span className="content-setting_modal-update_slash"> / </span>
            <Input
              className="content-setting_modal-update_comboticketinput"
              placeholder="Số lượng"
            />
            <span className="content-setting_modal-update_ticket"> vé </span>
            <span className="content-setting_modal-update_statustitle">
              Tình trạng
            </span>
            <Select
              className="content-setting_modal-update_statusselect"
              defaultValue="lucy"
              onChange={handleChange}
            >
              <Option value="jack">Đã áp dụng</Option>
              <Option value="lucy">Tắt</Option>
            </Select>
            <span className="content-setting_modal-update_start">*</span>
            <span className="content-setting_modal-update_note">
              là thông tin bắt buộc
            </span>
            <Button
              onClick={handleCancel}
              className="content-ticketmanage_modal-update_btncancel"
            >
              Hủy
            </Button>
            <Button
              onClick={handleOk}
              className="content-ticketmanage_modal-update_btnsave"
            >
              Lưu
            </Button>
          </Content>
        </Modal>
      </>
    );
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
  }

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <Layout className="layout_content-setting">
        <Content className="content-setting">
          <h2 className="content-setting_title">Danh sách gói vé</h2>
          <div className="content-setting_category">
            <Input
              className="content-setting_category-search"
              placeholder="Tìm bảng số vé"
            />
            <Button
              icon={
                <FilterOutlined className="content-setting_category-filter--icon" />
              }
              className="content-setting_category-filter"
            >
              Lộc vé
            </Button>
            <Button
              onClick={showModal}
              className="content-setting_category-addticket"
            >
              Thêm gói vé
            </Button>
          </div>
          <Table
            className="content-setting_table"
            dataSource={dataSource}
            columns={columns}
          />

          <Modal
            width={"784px"}
            footer={null}
            visible={isModalVisible}
            onCancel={handleCancel}
          >
            <Content className="content-setting_modal-update">
              <h3
                style={{ left: "39%" }}
                className="content-setting_modal-update_header"
              >
                Thêm gói vé
              </h3>
              <span className="content-setting_modal-update_titlecode">
                Mã sự kiện
              </span>
              <span className="content-setting_modal-update_titlestart">*</span>
              <span className="content-setting_modal-update_titlename">
                Tên sự kiện
              </span>
              <Input
                className="content-setting_modal-update_eventcode"
                placeholder="PKG20210502"
              />
              <Input
                className="content-setting_modal-update_eventname"
                placeholder="Hội chợ triển lãm hàng tiêu dùng 2021"
              />
              <span className="content-setting_modal-update_fromdate">
                Ngày áp dụng
              </span>
              <span className="content-setting_modal-update_todate">
                Ngày hết hạn
              </span>
              <Space
                className="content-setting_modal-update_fromdate-calender"
                direction="vertical"
                size={12}
              >
                <DatePicker
                  defaultValue={moment("01/01/2015", dateFormatList[0])}
                  format={dateFormatList}
                />
              </Space>
              <TimePicker
                className="content-setting_modal-update_fromtime-calender"
                defaultValue={moment("12:08:23", "HH:mm:ss")}
              />
              <Space
                className="content-setting_modal-update_todate-calender"
                direction="vertical"
                size={12}
              >
                <DatePicker
                  defaultValue={moment("01/01/2015", dateFormatList[0])}
                  format={dateFormatList}
                />
              </Space>
              <TimePicker
                className="content-setting_modal-update_totime-calender"
                defaultValue={moment("12:08:23", "HH:mm:ss")}
              />
              <span className="content-setting_modal-update_pricetitle">
                Giá vé áp dụng
              </span>
              <Checkbox
                className="content-setting_modal-update_checkbox"
                onChange={onChange}
              >
                Vé lẻ (vnđ/vé) với giá
              </Checkbox>
              <Input
                className="content-setting_modal-update_priceinput"
                placeholder="Giá vé"
              />
              <span className="content-setting_modal-update_oneticket">
                {" "}
                / vé
              </span>
              <Checkbox
                className="content-setting_modal-update_combocheckbox"
                onChange={onChange}
              >
                Combo vé với giá
              </Checkbox>
              <Input
                className="content-setting_modal-update_combopriceinput"
                placeholder="Giá vé"
              />
              <span className="content-setting_modal-update_slash"> / </span>
              <Input
                className="content-setting_modal-update_comboticketinput"
                placeholder="Số lượng"
              />
              <span className="content-setting_modal-update_ticket"> vé </span>
              <span className="content-setting_modal-update_statustitle">
                Tình trạng
              </span>
              <Select
                className="content-setting_modal-update_statusselect"
                defaultValue="lucy"
                onChange={handleChange}
              >
                <Option value="jack">Đã áp dụng</Option>
                <Option value="lucy">Tắt</Option>
              </Select>
              <span className="content-setting_modal-update_start">*</span>
              <span className="content-setting_modal-update_note">
                là thông tin bắt buộc
              </span>
              <Button
                onClick={handleCancel}
                className="content-ticketmanage_modal-update_btncancel"
              >
                Hủy
              </Button>
              <Button
                onClick={handleOk}
                className="content-ticketmanage_modal-update_btnsave"
              >
                Lưu
              </Button>
            </Content>
          </Modal>
        </Content>
      </Layout>
    </div>
  );
};
