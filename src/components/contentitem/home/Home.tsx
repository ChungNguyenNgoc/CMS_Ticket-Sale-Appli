import {
  Layout,
  Input,
  Button,
  Table,
  Tag,
  Radio,
  Space,
  DatePicker,
  Checkbox,
  Divider,
} from "antd";
import { Pie } from "@ant-design/plots";
import "./Home.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Area } from "@ant-design/plots";

const { Content } = Layout;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

export const Home = () => {
  const DemoArea = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);

    const asyncFetch = () => {
      fetch(
        "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log("fetch data failed", error);
        });
    };
    const config = {
      data,
      xField: "timePeriod",
      yField: "value",
      xAxis: {
        range: [0, 1],
      },
      smooth: true,
      line: {
        color: "#ff6600",
        size: 4,
      },

      areaStyle: () => {
        return {
          fill: "l(270) 0:#ffffff 0.5:#ffa200 1:#ffb431",
        };
      },
    };

    return <Area {...config} />;
  };
  const DemoPie = () => {
    const data = [
      {
        type: "Vé đã sử dụng",
        value: 13568,
        color: "red",
      },
      {
        type: "Vé chưa sử dụng",
        value: 56024,
        color: "blue",
      },
    ];

    const config = {
      appendPadding: 10,
      data,
      angleField: "value",
      colorField: "type",
      color: ["#4F75FF", "#FF8A48"],
      radius: 1,
      innerRadius: 0.45,
      label: {
        type: "inner",
        offset: "-50%",
        content: "{value}",
        style: {
          textAlign: "center",
          fontSize: 14,
        },
      },
      interactions: [
        {
          type: "element-selected",
        },
        {
          type: "element-active",
        },
      ],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: "pre-wrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
          content: "",
        },
      },
    };
    return <Pie {...config} />;
  };

  return (
    <div>
      <Layout className="layout_content-home">
        <Content className="content-home">
          <h2 className="content-home_title">Thống kê</h2>
          <span className="content-home_charttitle">Doanh thu</span>
          {/*   */}
          <div className="content-home_chart">
            <DemoArea />
          </div>
          <span className="content-home_totalrevenuetitle">
            Tổng doanh thu theo tuần
          </span>
          <span className="content-home_totalrevenue">525.145.000</span>
          <span className="content-home_totalrevenueunit">đồng</span>
          <Space
            className="content-home_calender-donut"
            direction="vertical"
            size={12}
          >
            <DatePicker
              defaultValue={moment("01/01/2015", dateFormatList[0])}
              format={dateFormatList}
            />
          </Space>
          <Space
            className="content-home_calender-chart"
            direction="vertical"
            size={12}
          >
            <DatePicker
              defaultValue={moment("01/01/2015", dateFormatList[0])}
              format={dateFormatList}
            />
          </Space>
          <span className="content-home_donut-fist">Gói gia đình</span>
          <span className="content-home_donut-second">Gói sự kiện</span>

          <div className="content-home_donut">
            <DemoPie />
            <DemoPie />
          </div>
        </Content>
      </Layout>
    </div>
  );
};
