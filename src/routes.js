import Index from "./routes/Index";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
import AdminIndex from "./routes/AdminIndex";
import Product from "./routes/Product";
import ProductEdit from "./routes/ProductEdit";

export const mainRoutes = [
  { path: "/", component: Index, exact: true },
  { path: "/404", exact: true, component: NotFound },
  { path: "/login", exact: true, component: Login },
];
export const adminRoutes = [
  {
    path: "/admin/index",
    exact: true,
    component: AdminIndex,
    isShow: true,
    title: "首页",
  },
  {
    path: "/admin/products",
    exact: true,
    component: Product,
    isShow: true,
    title: "商品管理",
  },
  {
    path: "/admin/products/edit/:id?",
    exact: true,
    component: ProductEdit,
    isShow: false,
  },
];
