import { PageHeader, Button, Descriptions } from 'antd';

function PageHead(){
  return(
      <div className="site-page-header">
          <PageHeader
              ghost={true}
              onBack={() => window.history.back()}
              title="DailyNews"
              subTitle="Stay Updated"

          >
             {/* <Descriptions size="small" column={3}>
                  <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                  <Descriptions.Item label="Association">
                      <a>421421</a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                  <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
              </Descriptions>*/}
         </PageHeader> 
      </div>
  )
}
export default PageHead;