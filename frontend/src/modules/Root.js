import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      {navigation.state === "loading" && <p>Loading...</p>}
      <Outlet />
    </>
  );
}
export default RootLayout;
