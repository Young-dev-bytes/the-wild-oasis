import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

function AppLayout() {
  console.log("applayout");

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
