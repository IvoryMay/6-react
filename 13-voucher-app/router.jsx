import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import NotFoundPage from "./src/pages/NotFoundPage";
import DashboardPage from "./src/pages/DashboardPage";
import SalePage from "./src/pages/SalePage";
import ProductPage from "./src/pages/ProductPage";
import VoucherPage from "./src/pages/VoucherPage";
import ProductCreatePage from "./src/pages/ProductCreatePage";
import ProductEditPage from "./src/pages/ProductEditPage";

const router = 
createBrowserRouter([
  {
    path: "/",

    element: <Layout/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product/create",
        element: <ProductCreatePage />,
      },
      {
        path: "/product/edit/:id",
        element: <ProductEditPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/voucher",
        element: <VoucherPage />,
      }
    ],
  }
]);

export default router;