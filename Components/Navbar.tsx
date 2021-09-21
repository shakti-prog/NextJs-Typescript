import { Menu,Row,} from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link'
import PageHead from './PageHeader';

const {SubMenu} = Menu;






function Nav(){
  return(
      <>
          <Row style={{backgroundColor:"white"}}>
                <PageHead/>
          </Row>
          <Row style={{paddingBottom:"80px"}}>
                  <Menu theme="light" mode="horizontal" style={{width:"100%"}}>    
                  <Menu.Item key="1" style={{fontSize:"large"}}><Link href="/mainPage">Homepage</Link></Menu.Item>
                  <Menu.Item key="2" style={{fontSize:"large"}}><Link href="/buisness">Buisness</Link></Menu.Item>
                  <Menu.Item key="3" style={{fontSize:"large"}}><Link href="/entertainment">Entertainment</Link></Menu.Item>
                  <Menu.Item key="5" style={{fontSize:"large"}}><Link href="/Science">Science</Link></Menu.Item>
                  <Menu.Item key="6"style={{fontSize:"large"}} ><Link href="/Sport">Sports</Link></Menu.Item>
                  <Menu.Item key="7" style={{fontSize:"large"}}><Link href="/Technology">Technology</Link></Menu.Item>
                  <SubMenu style={{fontSize:"large"}} key="sub1"  title="Around the globe">
                      <Menu.Item key="8"><Link href="/usa">Usa</Link></Menu.Item>
                      <Menu.Item key="9"><Link href="/china">China</Link></Menu.Item>
                      <Menu.Item key="10"><Link href="/russia">Russia</Link></Menu.Item>
                      <Menu.Item key="11"><Link href="/Australia">Australia</Link></Menu.Item>
                      <Menu.Item key="12"><Link href="/brazil">Brazil</Link></Menu.Item>
                  </SubMenu>
                </Menu>
                <hr/> 
          </Row>
          
     
      </>
  )

}

export default Nav;