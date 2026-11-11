
import { useState, useEffect } from 'react'
// 导入类型区分一般的模块，加一个type关键字
import type { ChannelItem } from '@/apis/list'
import { fetchChannelAPI } from '@/apis/list'

// 把和Tabs相关的响应式数据状态以及操作数据的方法放到hook函数中
function useTabs () {
  const [channels, setChannels] = useState<ChannelItem[]>([])
  useEffect(() => {
    fetchChannelAPI().then(res => {
      setChannels(res.data.data.channels)
    })
  }, [])
  return {
    channels
  }
}

export {
  useTabs
}
