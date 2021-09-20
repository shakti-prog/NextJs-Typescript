import { Layout, Menu,Row} from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link'
import PageHead from './PageHeader';



const {Header} = Layout;




function Nav(){
  return(
      <>
          <Row style={{backgroundColor:"white"}}>
                <PageHead/>
          </Row>
          <Row style={{paddingBottom:"50px"}}>
                  <div className="logo" />
                  <Menu theme="light" mode="horizontal" >
                      <Menu.Item key="1"><Link href="/mainPage">HomePage</Link></Menu.Item>
                      <Menu.Item key="2"><Link href="/buisness">Business</Link></Menu.Item>
                      <Menu.Item key="3"><Link href="/entertainment">Entertainment</Link></Menu.Item>
                      <Menu.Item key="4"><Link href="/health">General Health</Link></Menu.Item>
                      <Menu.Item key="5"><Link href="/Science">Science</Link></Menu.Item>
                      <Menu.Item key="6" ><Link href="/Sport">Sports</Link></Menu.Item>
                      <Menu.Item key="7"><Link href="/Technology">Technology</Link></Menu.Item>
                  </Menu>
      </Row>
      </>
  )

}

export default Nav;