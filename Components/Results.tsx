import {FunctionComponent} from 'react';
import {Card,Button,Typography,Avatar} from 'antd';

type CardProps = {
  // the paragraph is optional
  source: Object, 
  author: string, 
  title: string, 
  description: string,
  url: string,
  urlToImage: 
  string, 
  publishedAt: 
  string, 
  content: 
  string
 
  }

const {Paragraph,Title} = Typography;

export const Result: FunctionComponent<CardProps>=(props)=>{
    const ellipsis = true
    return(
        <div>
            <Card
                hoverable

                style={{ display:"flex",flexDirection:"column",alignItems: "center", maxHeight: "500px", minHeight: "500px", padding: "20px", marginTop: "10px", marginBottom: "10px", marginLeft: "10px", marginRight: "10px", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" }}
                cover={<Avatar
                    style={{alignItems:"center",display:"flex",flexDirection:"column"}}
                    src={props.urlToImage}
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
                    level={4}>Title: {props.title == null ? "NA" : props.title}</Title>

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
                    <Title level={5}>{props.description}</Title>
                </Paragraph>
                <Title level={5}>Author: {props.author == null ? "NA" : props.author}</Title>
                <Title level={5}><a href={props.url}>Read More</a></Title>


                {/* <Meta title={headline.title} description={headline.description} />
                                            <h3>Author - {headline.author}</h3>  */}

            </Card>


        </div>
    )
}

