import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Protected } from "./Protected";
import { privateRoutes, publicRoutes } from "./RouteDef";
export function RouteMapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Outlet />}>
          {publicRoutes.map((route, i) => {
            return <Route path={route.path} element={route.element} key={i} />;
          })}
          {/*defining private routes*/}
          <Route path={"/"} element={<Protected loggedIn={false} />}>
            {privateRoutes.map((route, i) => {
              return (
                <Route path={route.path} element={route.element} key={i} />
              );
            })}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
