/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/components/Layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Components',
    icon: 'component'
  },
  children: [
    {
      path: '/components-demo/tinymce',
      component: () => import('@/pages/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: { title: 'Tinymce' }
    },
    {
      path: '/components-demo/markdown',
      component: () => import('@/pages/components-demo/markdown'),
      name: 'MarkdownDemo',
      meta: { title: 'Markdown' }
    },
    {
      path: '/components-demo/json-editor',
      component: () => import('@/pages/components-demo/json-editor'),
      name: 'JsonEditorDemo',
      meta: { title: 'JSON Editor' }
    },
    {
      path: '/components-demo/split-pane',
      component: () => import('@/pages/components-demo/split-pane'),
      name: 'SplitpaneDemo',
      meta: { title: 'SplitPane' }
    },
    {
      path: '/components-demo/avatar-upload',
      component: () => import('@/pages/components-demo/avatar-upload'),
      name: 'AvatarUploadDemo',
      meta: { title: 'Upload' }
    },
    {
      path: '/components-demo/dropzone',
      component: () => import('@/pages/components-demo/dropzone'),
      name: 'DropzoneDemo',
      meta: { title: 'Dropzone' }
    },
    {
      path: '/components-demo/sticky',
      component: () => import('@/pages/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: 'Sticky' }
    },
    {
      path: '/components-demo/count-to',
      component: () => import('@/pages/components-demo/count-to'),
      name: 'CountToDemo',
      meta: { title: 'Count To' }
    },
    {
      path: '/components-demo/mixin',
      component: () => import('@/pages/components-demo/mixin'),
      name: 'ComponentMixinDemo',
      meta: { title: 'Component Mixin' }
    },
    {
      path: '/components-demo/back-to-top',
      component: () => import('@/pages/components-demo/back-to-top'),
      name: 'BackToTopDemo',
      meta: { title: 'Back To Top' }
    },
    {
      path: '/components-demo/drag-dialog',
      component: () => import('@/pages/components-demo/drag-dialog'),
      name: 'DragDialogDemo',
      meta: { title: 'Drag Dialog' }
    },
    {
      path: '/components-demo/drag-select',
      component: () => import('@/pages/components-demo/drag-select'),
      name: 'DragSelectDemo',
      meta: { title: 'Drag Select' }
    },
    {
      path: '/components-demo/dnd-list',
      component: () => import('@/pages/components-demo/dnd-list'),
      name: 'DndListDemo',
      meta: { title: 'Dnd List' }
    },
    {
      path: '/components-demo/drag-kanban',
      component: () => import('@/pages/components-demo/drag-kanban'),
      name: 'DragKanbanDemo',
      meta: { title: 'Drag Kanban' }
    }
  ]
}

export default componentsRouter
