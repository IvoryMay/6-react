import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import NotFoundPage from "./src/pages/NotFoundPage";
import DashboardPage from "./src/pages/DashboardPage";
import SalePage from "./src/pages/SalePage";
import ProductPage from "./src/pages/ProductPage";
import VoucherPage from "./src/pages/VoucherPage";

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