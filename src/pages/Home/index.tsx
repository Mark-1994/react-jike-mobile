import './style.css'
import { Tabs } from 'antd-mobile'
import { useTabs } from './useTabs'

const Home = () => {
  // 组件中调用hook函数，消费其返回的状态和方法
  const { channels } = useTabs()
  return (
    <div>
      <div className="tabContainer">
        {/* tab区域 */}
        <Tabs>
          {channels.map(item => (
            <Tabs.Tab title={item.name} key={item.id}>
              {/* list组件 */}
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default Home
