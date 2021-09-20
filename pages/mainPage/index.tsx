import 'antd/dist/antd.css';
import Nav from '../../Components/Navbar';
import { Layout ,Card,Button,Row,Col,Typography,Avatar} from 'antd';
import {InferGetStaticPropsType} from 'next';
import request from '../../utils/request';



const { Header, Content} = Layout;

const {Title,Paragraph} = Typography;


export const getStaticProps = async() => {
    const res = await fetch(`https://newsapi.org/v2/${request.headline.url}`)
    const data  = await res.json();
    return{
        props:{
           data
        }
    }
  }


function mainPage( {data}: InferGetStaticPropsType<typeof getStaticProps>){
    const ellipsis = true;
    return(   
        <>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
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
                                    <Title data-aos="zoom-out" data-aos-delay="200" data-aos-once>HEADLINES</Title>
                                </div>
                            </Col>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                        <Row>
                            <Col xxl={4} xl={3} lg={4} xs={1} md={3} sm={3} />

                            {data.articles.map((headline: {
                                source: Object, author: string, title: string, description: string, url: string,
                                urlToImage: string, publishedAt: string, content: string
                            }) => (
                                <>
                                    <Col xxl={6} xl={9} lg={8} xs={22} md={18} sm={18}>

                                        <Card
                                            hoverable

                                            style={{ alignContent: "center", maxHeight: "500px", minHeight: "500px", padding: "20px", marginTop: "10px", marginBottom: "10px", marginLeft: "10px", marginRight: "10px", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"  }}
                                            cover={<Avatar
                                                src={headline.urlToImage}
                                                size={{
                                                    xs: 124,
                                                    sm: 132,
                                                    md: 140,
                                                    lg: 164,
                                                    xl: 180,
                                                    xxl: 200,
                                                }} />}
                                        >
                                            <Title ellipsis={
                                                ellipsis
                                                    ? {
                                                        rows: 2,
                                                        expandable: false,
                                                        symbol: 'more',
                                                    }
                                                    : false
                                            }
                                                level={4}>Title: {headline.title == null ? "NA" : headline.title}</Title>

                                            <Paragraph
                                                ellipsis={
                                                    ellipsis
                                                        ? {
                                                            rows: 3,
                                                            expandable: false,
                                                            symbol: 'more',
                                                        }
                                                        : false
                                                }
                                            >
                                                <Title level={5}>{headline.description}</Title>
                                            </Paragraph>
                                            <Title level={5}>Author: {headline.author == null ? "NA" : headline.author}</Title>
                                            <Title level={5}><a href={headline.url}>Read More</a></Title>


                                            {/* <Meta title={headline.title} description={headline.description} />
                                            <h3>Author - {headline.author}</h3>  */}

                                        </Card>
                                    </Col>
                                    <Col xxl={0} xl={0} lg={0} xs={1} md={3} sm={3} />
                                    <Col xxl={0} xl={0} lg={0} xs={1} md={3} sm={3} />
                                </>
                            ))}
                        </Row>
                    </Content>
                </div>
            </Layout>
            </>
    )
}




export default mainPage;