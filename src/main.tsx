import { createRoot } from 'react-dom/client'
// 导入provider高阶组件
import { RouterProvider } from 'react-router-dom'
// 导入router实例
import { router } from './router'

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
