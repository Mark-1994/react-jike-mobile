import './style.css'
import { Tabs } from 'antd-mobile'
import { useState, useEffect } from 'react'
// 导入类型区分一般的模块，加一个type关键字
import type { ChannelItem } from '@/apis/list'
import { fetchChannelAPI } from '@/apis/list'

const Home = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([])
  useEffect(() => {
    fetchChannelAPI().then(res => {
      setChannels(res.data.data.channels)
    })
  }, [])
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
