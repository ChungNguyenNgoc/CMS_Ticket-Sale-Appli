import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/contentitem/home/Home";
import { TicketManage } from "./components/contentitem/ticketmanage/TicketManage";
import { TicketChange } from "./components/contentitem/ticketchange/TicketChange";
import { Setting } from "./components/contentitem/ticketsetting/Setting";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="ticketmanage" element={<TicketManage />} />
            <Route path="ticketchange" element={<TicketChange />} />
            <Route path="setting" element={<Setting />} />
            <Route
              path="service"
              element={
                <div className="layout_content-ticketmanage">
                  <Content className="content-ticketmanage">
                    <h2 className="content-ticketmanage_title">Not Found</h2>
                  </Content>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
