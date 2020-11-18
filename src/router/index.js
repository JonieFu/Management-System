import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "MES系统", icon: "dashboard" }
      }
    ]
  },

  {
    path: "/permissions",
    component: Layout,
    redirect: "/permissions/employee",
    name: "Permissions",
    meta: { title: "权限管理", icon: "el-icon-s-help" },
    children: [
      {
        path: "employee",
        name: "Employee",
        component: () => import("@/views/employee/index"),
        meta: { title: "员工管理"}
      },
      
      {
        path:"department",
        name:"Department",
        component:()=>import("@/views/department/index"),
        meta: { title: "部门管理" }
      },{
        path: "company",
        name: "Company",
        component: () => import("@/views/company/index"),
        meta: { title: "公司管理" }
      },
      {
        path:"role",
        name:"Role",
        component:()=>import("@/views/role/index"),
        meta:{title:"角色分配"}
      }
    ]
  },

  {
    path:"/contract-management",
    component:Layout,
    redirect:"/contract-management/contract",
    name:"Contract-management",
    meta: { title: "合同管理", icon: "el-icon-s-management" },
    children:[
      {
        path:"contract",
        name:"Contract",
        component:()=> import("@/views/contract/contract/index"),
        meta:{title:"合同管理"}
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
