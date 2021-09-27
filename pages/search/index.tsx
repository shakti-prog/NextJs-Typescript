import React from 'react';
import { Layout,Input,Col,Row ,Typography} from 'antd';
import { useEffect, useState } from 'react';
import Nav from '../../Components/Navbar';
import {Result} from '../../Components/Results';
import request from '../../utils/request';

const {Header,Content} = Layout;
const { Search } = Input;



 


function Ret(props:{props:[]}){
    useEffect(() => {


    }, [props])
    if (props == undefined || props.props == undefined) {
        alert("No news found , pls enter something else")
        return (
            <div>
            </div>
        )

    }

  return(
      <div style={{ backgroundColor: "white" }}>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, height: "100vh" }}>
              <Row>
                  {props.props.map((headline: {
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
  )
}




function SearchNews(){
    const [data,setData] = useState<[]>([])
    const onSearch = async(value:string) =>{
        const key = "bdf23da35e554f11881ec710265f4e4a"
        const res = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=${key}`);
        const data  = await res.json();
        setData(data.articles);
        
    }
  
    return(
    <>    
            <Header>
                <Nav />
                <Row >
                    <Search placeholder="input search text" enterButton="Search" size="large" onSearch={onSearch} />
                </Row>
            </Header>
            <Layout style={{ marginTop: "150px" }}>
                <Ret props={data} />
            </Layout>
  
    </>
   
    )





}

export default SearchNews;