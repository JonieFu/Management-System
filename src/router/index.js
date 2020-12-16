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
        component: () => import("@/views/authority-management/employee.vue"),
        meta: { title: "员工管理" }
      },
      {
        path: "department",
        name: "Department",
        component: () => import("@/views/authority-management/department.vue"),
        meta: { title: "部门管理" }
      }, {
        path: "company",
        name: "Company",
        component: () => import("@/views/authority-management/company.vue"),
        meta: { title: "公司管理" }
      },
      {
        path: "role",
        name: "Role",
        component: () => import("@/views/authority-management/role.vue"),
        meta: { title: "角色分配" }
      },
      {
        path: "menu",
        name: "Menu",
        component: () => import("@/views/authority-management/menu.vue"),
        meta: { title: "菜单管理" }
      }
    ]
  },
  {
    path: "/basicdata",
    component: Layout,
    name: "Basicdata",
    redirect: "/basicdata/data_configuration",
    meta: { title: "基础数据", icon: "el-icon-s-data" },
    children: [
      {
        path: "data_configuration",
        name: "Data_configuration",
        component: () => import("@/views/basicdata/data_configuration.vue"),
        meta: { title: "基础数据配置" },
      },
      {
        path: "data_maintenance",
        name: "Data_maintenance",
        component: () => import("@/views/basicdata/data_maintenance.vue"),
        meta: { title: "基础数据维护" }
      }
    ]
  },
  {
    path: "/contract-management",
    component: Layout,
    redirect: "/contract-management/contract",
    name: "Contract-management",
    meta: { title: "合同管理", icon: "el-icon-s-management" },
    children: [
      {
        path: "contract",
        name: "Contract",
        component: () => import("@/views/contract/index"),
        meta: { title: "合同管理" },
      },
      {
        path: "review",
        name: "Review",
        component: () => import("@/views/contract/reviewContract"),
      },
      {
        path: "edit",
        name: "Edit",
        component: () => import("@/views/contract/editContract")
      },
      {
        path: "add",
        name: "Add",
        component: () => import("@/views/contract/addContract")
      }

    ]
  },
  {
    path: "/technology",
    name: "Technology",
    component: Layout,
    redirect: "/technology/bom",
    meta: { title: "技术管理", icon: "el-icon-s-help" },
    children: [
      {
        path: "bom",
        name: "Bom",
        component: () => import("@/views/technology/BOM.vue"),
        meta: { title: "BOM清单" }
      },
    ]
  },
  {
    path: "/purchase",
    component: Layout,
    redirect: "/purchase/purchase_storage",
    name: "purchase",
    meta: { title: "采购管理", icon: "el-icon-s-help" },
    children: [
      {
        path: "purchase_storage",
        name: "Purchase_storage",
        component: () => import("@/views/purchase/purchase_storage.vue"),
        meta: { title: "采购入库" }
      }
    ]
  },
  {
    path: "/process",
    name: "process",
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
