import 'antd/dist/antd.css';
import Nav from '../../Components/Navbar';
import { Layout ,Col,Row,Typography} from 'antd';
import {InferGetServerSidePropsType } from 'next';
import request from '../../utils/request';
import { Result } from '../../Components/Results';
import React from 'react';


const { Header, Content} = Layout;
const {Title} = Typography;


export const getServerSideProps = async() => {

    const res = await fetch(`https://newsapi.org/v2/${request.usa.url}`)
    const data  = await res.json();
    return{
        props:{
           data
        }
    }
  }


function Usa( {data}: InferGetServerSidePropsType<typeof getServerSideProps>){
    if(!data){
        return(
            <h1>Something Went Wrong</h1>
        )
    }
    return(  
        <>   
            <Header style={{ width: '100%' }}>
                <div className="logo" />
                <Nav />
            </Header>
            <Layout style={{ height: "100vh" }}>
                <div style={{ backgroundColor: "white" }}>
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, height: "100vh" }}>
                        <Row>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "center" }}>
                                <div>
                                    <Title level={3} data-aos="zoom-out" data-aos-delay="200" data-aos-once style={{ paddingTop: "50px" }}>HEADLINES</Title>
                                    <Title level={5} data-aos="zoom-out" data-aos-delay="200" data-aos-once style={{ paddingTop: "10px" }}>USA</Title>
                                </div>
                            </Col>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                        <Row>


                            {data.articles.map((headline: {
                                source: Object, author: string, title: string, description: string, url: string,
                                urlToImage: string, publishedAt: string, content: string
                            }, i: number) => (
                                <React.Fragment key={i}>
                                    <Col xxl={12} xl={8} lg={8} xs={24} md={24} sm={24}>
                                        <Result
                                            source={headline.source}
                                            author={headline.author}
                                            title={headline.title}
                                            description={headline.description}
                                            url={headline.url}
                                            urlToImage={headline.urlToImage}
                                            publishedAt={headline.publishedAt}
                                            content={headline.content} />
                                    </Col>
                                    <Col xxl={0} xl={0} lg={0} xs={1} md={3} sm={3} />
                                    <Col xxl={0} xl={0} lg={0} xs={1} md={3} sm={3} />
                                </React.Fragment>
                            ))}
                        </Row>
                    </Content>
                </div>
            </Layout>
        </>
        
    )
}




export default Usa;