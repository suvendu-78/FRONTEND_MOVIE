import { Outlet } from "react-router-dom";
import Foot from "./Footer.jsx";
import Head from "./header.jsx";
const AppLay = () => {
  return (
    <>
      <Head />
      <Outlet />
      <Foot />
    </>
  );
};
export default AppLay;
