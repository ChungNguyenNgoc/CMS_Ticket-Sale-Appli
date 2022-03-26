import { FilterOutlined, EditOutlined } from "@ant-design/icons";
import { Layout, Input, Button, Table, Tag } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { showTicket } from "../../../../store/actions/TicketAction";
import "./TicketChange.css";
const { Content } = Layout;

export const PackageTicketList = () => {
  const dispatch = useDispatch();

  const { tickets } = useSelector((state: RootState) => state.ticketReducer);
  useEffect(() => {
    dispatch(showTicket());
  }, [dispatch]);

  const dataSource = [
    {
      stt: "1",
      ticketNumber: "205314876321",
      date: "14/04/2021",
      ticketTypeName: "Vé cổng",
      checkInGate: "Cổng 1",
      status: true,
    },
    {
      stt: "1",
      ticketNumber: "205314876321",
      date: "14/04/2021",
      ticketTypeName: "Vé cổng",
      checkInGate: "Cổng 1",
      status: false,
    },
  ];

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Số vé",
      dataIndex: "ticketNumber",
      key: "ticketNumber   ",
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Tên loại vé",
      dataIndex: "ticketTypeName",
      key: "ticketTypeName",
    },
    {
      title: "Cổng check-in",
      dataIndex: "checkInGate",
      key: "checkInGate",
    },
    {
      title: "",
      dataIndex: "status",
      key: "status",
      render: (status: boolean) => {
        if (status === true) {
          return <span style={{ color: "#FD5959" }}>Đã đổi soát</span>;
        } else {
          return <span style={{ color: "#A5A8B1" }}>Chưa đổi soát</span>;
        }
      },
    },
  ];

  return (
    <div>
      <Layout className="layout_content-package">
        <Content className="content-package">
          <h2 className="content-package_title">Đổi soát vé</h2>
          <div className="content-package_category">
            <Input
              className="content-package_category-search"
              placeholder="Tìm bảng số vé"
            />
            <Button className="content-package_category-addticket">
              Chốt đổi soát
            </Button>
          </div>
          <Table
            className="content-package_table"
            dataSource={tickets}
            columns={columns}
          />
        </Content>
      </Layout>
    </div>
  );
};
