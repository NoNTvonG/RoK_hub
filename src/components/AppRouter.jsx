import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { publicRoutes } from "../router"

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  )
}

export default AppRouter
