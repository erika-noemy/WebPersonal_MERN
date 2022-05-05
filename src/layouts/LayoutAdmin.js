import React from "react";
import { Layout } from "antd";
export default function LayoutAdmin(props){
    const {children} = props;
    console.log(props);
    const {Header,Content,Footer} = Layout
    return(
       <Layout>
           <Layout>
               <Header> HEADER</Header>
               <Content> {children}</Content>
               <Footer> tincode</Footer>
           </Layout>
       </Layout>
    )
}