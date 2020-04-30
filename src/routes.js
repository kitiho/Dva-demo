import Index from "./routes/Index";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
import AdminIndex from "./routes/AdminIndex";
import Product from "./routes/Product";
import ProductEdit from "./routes/ProductEdit";

export const mainRoutes = [
  { path: "/", component: Index, exact: true },
  { path: "/404", component: NotFound },
  { path: "/login", component: Login },
];
export const adminRoutes = [
  { path: "/admin/index", component: AdminIndex, isShow: true, title: "首页" },
  {
    path: "/admin/products",
    exact: true,
    component: Product,
    isShow: true,
    title: "商品管理",
  },
  { path: "/admin/products/edit/:id?", component: ProductEdit, isShow: false },
];
