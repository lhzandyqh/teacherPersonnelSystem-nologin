import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import treeTableRouter from './modules/tree-table'
// import nestedRouter from './modules/nested'

/** note: subTable-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in subTable-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/alphaViews/homepage/index'),
        name: 'Dashboard',
        meta: { title: '诊改分析', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  }
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  {
    path: '/personalinformation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/personalInformation/index'),
        name: 'personalinformation',
        meta: { title: '个人信息', roles: ['教师'], icon: 'user', noCache: true }
      }
    ]
  },
  // {
  //   path: '/attendanceinformation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/alphaViews/attendanceInformation/index'),
  //       name: 'attendanceinformation',
  //       meta: { title: '考勤信息', roles: ['教师'], icon: 'icon', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/careerDevelopment',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/alphaViews/careerDevelopment/index'),
  //       name: 'careerDevelopment',
  //       meta: { title: '发展规划', roles: ['教师'], icon: 'icon', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/worktasks',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/workTasks/index'),
        name: 'worktasks',
        meta: { title: '任务提交', roles: ['教师'], icon: 'example', noCache: true }
      }
    ]
  },
  {
    path: '/reviewsubmission',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/reviewSubmission/index'),
        name: 'reviewsubmission',
        meta: { title: '审核历史', roles: ['教师'], icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/salaryinformation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/salaryInformation/index'),
        name: 'salaryinformation',
        meta: { title: '工资信息', roles: ['教师'], icon: 'star', noCache: true }
      }
    ]
  },
  {
    path: '/organizationalstructure',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/organizationalStructure/index'),
        name: 'organizationalstructure',
        meta: { title: '组织结构', roles: ['人事处主管'], icon: 'tree', noCache: true }
      }
    ]
  },
  {
    path: '/personnelmanagement',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/personnelManagement/index'),
        name: 'personnelmanagement',
        meta: { title: '人员管理', roles: ['系部主管'], icon: 'people', noCache: true }
      }
    ]
  },
  // {
  //   path: '/appointmentmanagement',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/alphaViews/appointmentManagement/index'),
  //       name: 'appointmentmanagement',
  //       meta: { title: '聘任管理', roles: ['人事处主管'], icon: 'component', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/contractmanagement',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/contractManagement/index'),
        name: 'contractmanagement',
        meta: { title: '合同管理', roles: ['人事处主管'], icon: 'excel', noCache: true }
      }
    ]
  },
  {
    path: '/integrationconfig',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/integrationConfig/index'),
        name: 'integrationconfig',
        meta: { title: '积分配置', roles: ['人事处主管'], icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/authoritymanagement',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/authoritymanagement/index'),
        name: 'authoritymanagement',
        meta: { title: '权限管理', roles: ['人事处主管'], icon: 'peoples', noCache: true }
      }
    ]
  },
  {
    path: '/specialapproval',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/specialApproval/index'),
        name: 'specialapproval',
        meta: { title: '专项审批', roles: ['系部主管'], icon: 'form', noCache: true }
      }
    ]
  },
  {
    path: '/specialapprovalpersonnel',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/specialApprovalPersonnel/index'),
        name: 'specialapprovalpersonnel',
        meta: { title: '专项审批', roles: ['人事处主管'], icon: 'form', noCache: true }
      }
    ]
  },
  {
    path: '/smartquery',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/smartQuery/index'),
        name: 'smartquery',
        meta: { title: '智能查询', roles: ['系部主管', '人事处主管'], icon: 'search', noCache: true }
      }
    ]
  },
  {
    path: '/smartservice',
    component: Layout,
    redirect: '/smartService/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '智能服务',
      icon: 'tree-table',
      roles: ['系部主管', '教师', '人事处主管'] // you can set roles in root nav
    },
    children: [
      // {
      //   path: 'onekeyexport',
      //   component: () => import('@/views/alphaViews/smartService/oneKeyExport'),
      //   name: 'onekeyexport',
      //   meta: {
      //     title: '一键导出',
      //     roles: ['系部主管', '人事处主管', '教师'] // or you can only set roles in subTable nav
      //   }
      // },
      // {
      //   path: 'batchimport',
      //   component: () => import('@/views/alphaViews/smartService/batchImport'),
      //   name: 'batchimport',
      //   meta: {
      //     title: '批量导入',
      //     roles: ['人事处主管', '系部主管'] // or you can only set roles in subTable nav
      //   }
      // },
      // {
      //   path: 'documentdownload',
      //   component: () => import('@/views/alphaViews/smartService/documentDownload'),
      //   name: 'documentdownload',
      //   meta: {
      //     title: '文件下载',
      //     roles: ['教师', '系部主管'] // or you can only set roles in subTable nav
      //   }
      // },
      {
        path: 'smartimport',
        component: () => import('@/views/alphaViews/smartService/fileLibrary'),
        name: 'smartimport',
        meta: {
          title: '文件库',
          roles: ['人事处主管'] // or you can only set roles in subTable nav
        }
      },
      {
        path: 'smartimportfortwo',
        component: () => import('@/views/alphaViews/smartService/fileLibraryForTwo'),
        name: 'smartimportfortwo',
        meta: {
          title: '文件库',
          roles: ['系部主管','教师'] // or you can only set roles in subTable nav
        }
      }
    ]
  },
  // {
  //   path: '/papertest',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/alphaViews/apapertest/index'),
  //       name: 'papertest',
  //       meta: { title: '论文测试', roles: ['教师','系部主管', '人事处主管'], icon: 'search', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/diagnosistask',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/alphaViews/diagnosisTask/index'),
        name: 'diagnosistask',
        meta: { title: '诊改任务', roles: ['教师'], icon: 'star', noCache: true }
      }
    ]
  },
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/svg-icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'icons', roles: ['教师', '人事处主管', '系部主管'], icon: 'icon', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['人事处主管', '系部主管'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['人事处主管', '系部主管'] // or you can only set roles in subTable nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'rolePermission',
  //         roles: ['人事处主管', '系部主管']
  //       }
  //     }
  //   ]
  // },

  /** When your routing table is too long, you can split it into small modules**/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,
  // treeTableRouter,

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'example',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'tab', roles: ['系部主管'], icon: 'tab' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/errorPage/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/errorPage/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/errorLog/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'errorLog', icon: 'bug' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/exportExcel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/selectExcel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/mergeHeader'),
  //       name: 'MergeHeader',
  //       meta: { title: 'mergeHeader' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/uploadExcel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'pdf', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },
  //
  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'clipboardDemo', icon: 'clipboard' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/i18n',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/i18n-demo/index'),
  //       name: 'I18n',
  //       meta: { title: 'i18n', icon: 'international' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]
