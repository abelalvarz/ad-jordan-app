import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "../config/AppRoutes"
import { Navigation } from "./Navigation"

export const Router = () => {

  // const isLoggedIn = false;

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {
          AppRoutes.map((item, index) => {
            // if (!isLoggedIn && item.isPrivate) return;
            return (
              <Route
                key={index}
                path={item.path}
                element={item.element} />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  )
}
