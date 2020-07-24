/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/components/Layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: '/table/dynamic-table',
      component: () => import('@/pages/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: { title: 'Dynamic Table' }
    },
    {
      path: '/table/drag-table',
      component: () => import('@/pages/table/drag-table'),
      name: 'DragTable',
      meta: { title: 'Drag Table' }
    },
    {
      path: '/table/inline-edit-table',
      component: () => import('@/pages/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: 'Inline Edit' }
    },
    {
      path: '/table/complex-table',
      component: () => import('@/pages/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: 'Complex Table' }
    }
  ]
}
export default tableRouter
