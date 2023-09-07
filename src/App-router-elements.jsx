import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import Cabins from "../pages/Cabins";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import Account from "../pages/Account";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import GlobalStyles from "../styles/GlobalStyles";

import AppLayout from "../ui/AppLayout";

/**
 * <AppLayout /> 组件在这种情况下将在其父级路由组件（你的第一个 <Route>）加载时渲染，
 * 因为它是该路由的 element 属性。这意味着，只要匹配到了该路由（在这种情况下，是 / 路径），ppp
 
 * <AppLayout /> 就会加载。
 */
const routerElements = createBrowserRouter(
  createRoutesFromElements([
    <Route
      element={<AppLayout />}
      errorElement={<h1>error</h1>}
      loader={async () => {
        console.log("applayout loader");
        return "test";
      }}
    >
      <Route index element={<Navigate replace to="/dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="cabins" element={<Cabins />} />
      <Route path="users" element={<Users />} />
      <Route path="settings" element={<Settings />} />
      <Route path="account" element={<Account />} />
    </Route>,
    <Route path="login" element={<Login />} />,
    <Route path="*" element={<PageNotFound />} />,
  ])
);

// createBrowserRouter -> createRoutesFromElements
function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routerElements} />
    </>
  );
}

export default App;
