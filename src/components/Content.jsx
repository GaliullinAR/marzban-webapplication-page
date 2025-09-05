import { Layout } from "antd";
import bg from '../assets/bg.jpg';

const Content = () => {
  return (
    <Layout.Content
      style={{
        flex: 1,
        color: "#fff",
        backgroundColor: "#0958d9",
        backgroundImage: `url(${bg})`,
        textAlign: "center",
      }}
    >
      Content
    </Layout.Content>
  );
};

export default Content;