import { useState } from 'react'
import { Flex, Layout } from 'antd';

import './App.css'

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 130px)',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

function App() {
  

  return (
    <>
      <Layout.Header style={headerStyle}>Header</Layout.Header>
      <Layout.Content style={contentStyle}>Content</Layout.Content>
      <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      
    </>
  )
}

export default App
