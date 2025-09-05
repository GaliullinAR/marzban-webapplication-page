import { useState } from "react";
import { Flex, Layout } from "antd";
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from "./components/Footer.jsx";
import "./App.css";


const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 130px)"
};


function App() {
  return (
    <>
      <Flex style={{minHeight: '100vh'}} vertical>
        <Header />
        <Content />
        <Footer />
      </Flex>
    </>
  );
}

export default App;
