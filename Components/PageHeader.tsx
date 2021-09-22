import { PageHeader,Typography} from 'antd';



const {Title} = Typography

function PageHead(){
  return(
      <div className="site-page-header">
          <PageHeader
              ghost={true}
              onBack={() => window.history.back()}
              title={<Title level={2}>DailyNews</Title>}
          >
         </PageHeader> 
      </div>
  )
}
export default PageHead;