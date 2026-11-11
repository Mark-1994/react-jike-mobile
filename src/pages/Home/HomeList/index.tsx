import { Image, List, InfiniteScroll } from 'antd-mobile'
import { useState } from 'react'
import type { ListRes } from '@/apis/list'
import { fetchListAPI } from '@/apis/list'
import { useNavigate } from 'react-router-dom'

type Props = {
  channelId: string
}

const HomeList = (props: Props) => {
  const { channelId } = props
  // 获取数据列表
  const [listRes, setListRes] = useState<ListRes>({
    results: [],
    pre_timestamp: '' + new Date().getTime()
  })
  // 是否还有更多内容
  const [hasMore, setHasMore] = useState(true)
  // 加载更多的回调函数
  const loadMore = async () => {
    // 编写加载下一页的核心逻辑
    try {
      const res = await fetchListAPI({
        channel_id: channelId,
        timestamp: listRes.pre_timestamp
      })
      // 拼接新数据，存取下一次请求的时间戳
      setListRes({
        results: [...listRes.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp
      })
      // 判断是否还有更多内容
      setHasMore(res.data.data.results.length > 0)
    } catch (error) {
      throw new Error('fetch list error', { cause: error })
    }
  }
  const navigate = useNavigate()
  const goToDetail = (id: string) => {
    navigate(`/detail?id=${id}`)
  }
  return (
    <>
      <List>
        {listRes.results.map((item) => (
          <List.Item key={item.art_id} prefix={<Image src={item.cover.images?.[0]} style={{ borderRadius: 20 }} fit="cover" width={40} height={40} />} description={item.pubdate} onClick={() => goToDetail(item.art_id)}>
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10} />
    </>
  )
}

export default HomeList
