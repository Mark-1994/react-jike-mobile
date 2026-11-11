import './style.css'
import { Tabs } from 'antd-mobile'
import { useTabs } from './useTabs'
import HomeList from './HomeList'

const Home = () => {
  // 组件中调用hook函数，消费其返回的状态和方法
  const { channels } = useTabs()
  return (
    <div>
      <div className="tabContainer">
        {/* tab区域 */}
        <Tabs defaultActiveKey="0">
          {channels.map(item => (
            <Tabs.Tab title={item.name} key={item.id}>
              {/* list组件 */}
              <div className="listContainer">
                <HomeList channelId={'' + item.id} />
              </div>
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default Home
