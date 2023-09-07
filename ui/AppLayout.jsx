import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

function AppLayout() {
  console.log("applayout");
  const loader = useLoaderData();
  console.log("applayout-loader", loader);

  useEffect(() => {
    console.log("applayout effect");
  }, []);
  return (
    <div>
      <h1>applayout</h1>
      <Outlet />
    </div>
  );
}

export default AppLayout;
