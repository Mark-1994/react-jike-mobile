import type { DetailDataType } from '@/apis/detail'
import { fetchDetailAPI } from '@/apis/detail'
import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'

const Detail = () => {
  const [detail, setDetail] = useState<DetailDataType | null>(null)
  // 获取路由参数
  const [params] = useSearchParams()
  const id = params.get('id')
  useEffect(() => {
    if (id) {
      fetchDetailAPI(id).then(res => {
        setDetail(res.data.data)
      })
    }
  }, [id])
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  // 数据返回之前 loading渲染占位
  if (!detail) {
    return <div>loading...</div>
  }
  // 数据返回之后 渲染接口返回的内容
  return (
    <div>
      <NavBar onBack={back}>{detail?.title}</NavBar>
      <div dangerouslySetInnerHTML={{ __html: detail?.content }}></div>
    </div>
  )
}

export default Detail
