import { Flex, Layout } from "antd";
import { UserOutlined,LoginOutlined,LogoutOutlined } from "@ant-design/icons";
import logo from '../assets/logo.png';

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#b61ea4ff",
  backdropFilter: "blur(20px)",
  boxShadow: "0 10px 30px 0px #000",
};

const Header = () => {
  return (
    <Layout.Header style={headerStyle}>
      <div className="container">
        <Flex align="center" justify="space-between">
          <a href="#" className="header__logo">
            <Flex align="center" gap="middle">
              <img src={logo} alt="logo" width={48} height={48}/>
              <span>ITRush</span>
            </Flex>
          </a>
          <Flex align="center" gap="middle">
            <button className="header__buttons sign__up">
              <LogoutOutlined />
              <span style={{display: "inline-block", marginLeft: '5px'}}>sign up</span>
            </button>
            <button className="header__buttons login">
              <LoginOutlined />
              <span style={{display: "inline-block", marginLeft: '5px'}}>login</span>
            </button>
            <button className="header__buttons admin__panel">
              <UserOutlined />
              <span style={{display: "inline-block", marginLeft: '5px'}}>admin</span>
            </button>
          </Flex>
        </Flex>
      </div>
    </Layout.Header>
  );
};

export default Header;
