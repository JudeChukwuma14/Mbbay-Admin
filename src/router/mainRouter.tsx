import { lazy, Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Spinner from "../components/common/spinner";
import VendorLayout from "../components/VendorInfo/VendorLayout";


const SignUp = lazy(() => import("../components/auth/SignUp"));
const LogIn = lazy(() => import("../components/auth/LogIn"));

//ADMINDASHBOARD
const Dashboard = lazy(() => import("../components/VendorInfo/Dashboard"))
const AllOrder = lazy(() => import("../components/VendorInfo/Orders/AllOrder"));
const OrderDetails = lazy(
  () => import("../components/VendorInfo/Orders/OrderDetails")
);
const AllProduct = lazy(
  () => import("../components/VendorInfo/Products/AllProduct")
);
const NewProduct = lazy(
  () => import("../components/VendorInfo/Products/NewProduct")
);
const Customer = lazy(
  () => import("../components/VendorInfo/Customers/Customer")
);
const Payments = lazy(
  () => import("../components/VendorInfo/Payments/Payments")
);
const PreviewInvoice = lazy(
  () => import("../components/VendorInfo/Payments/PreviewInvoice")
);
const EditVendorProfile = lazy(
  () => import("../components/VendorInfo/Setting/EditVendorProfile")
);
const KycVerification = lazy(
  () => import("../components/VendorInfo/Setting/KycVerification")
);
const Inbox = lazy(() => import("../components/VendorInfo/Inbox"));

const AllPost = lazy(() => import("../components/VendorInfo/Community&Res/AllPost"))

const withSuspense = (Component: React.ComponentType) => (
    <Suspense fallback={<Spinner />}>
      <Component />
    </Suspense>
  );
  
  const routesConfig: RouteObject[] = [
    { path: "/", element: withSuspense(SignUp) },
    { path: "signin", element: withSuspense(LogIn) },
    {
      path: "/app",
      element: <VendorLayout />,
      children: [
        { index: true, element: withSuspense(Dashboard) },
        { path: "orders", element: withSuspense(AllOrder) },
        { path: "order-details", element: withSuspense(OrderDetails) },
        { path: "all-products", element: withSuspense(AllProduct) },
        { path: "new-product", element: withSuspense(NewProduct) },
        { path: "customers", element: withSuspense(Customer) },
        { path: "Payments", element: withSuspense(Payments) },
        { path: "preview-invoice", element: withSuspense(PreviewInvoice) },
        { path: "edit-vendor-profile", element: withSuspense(EditVendorProfile) },
        { path: "kyc-verification", element: withSuspense(KycVerification) },
        { path: "inbox", element: withSuspense(Inbox) },
        { path: "all-post", element: withSuspense(AllPost) },
      ],
    },
  ];
  export const mainRouter = createBrowserRouter(routesConfig);