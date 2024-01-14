import { Navigate } from "react-router-dom";

export const extraRoutes = [
  {
    path: "/",
    element: <Navigate to="/employee" replace={true} />
  },

]