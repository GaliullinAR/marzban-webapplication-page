import { Layout } from "antd";

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#462baaff",
  boxShadow: '-10px 0 30px 10px #000'
};

const Footer = () => {
  return <Layout.Footer style={footerStyle}>Footer</Layout.Footer>;
};

export default Footer;