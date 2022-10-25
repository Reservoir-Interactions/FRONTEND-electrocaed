import { Navigate, Outlet } from "react-router-dom";
export function Protected({ loggedIn }: { loggedIn: boolean }) {
  console.log(loggedIn);
  if (!loggedIn) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}
