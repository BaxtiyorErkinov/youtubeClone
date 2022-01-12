import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";

const Router = () => {
  return (
    <>
      <Routes>
        {routes.map((r) => (
          <Route element={<r.element />} path={r.path} exact={r.exact} key={r.element}/>
        ))}
      </Routes>
    </>
  );
};
export default Router;
