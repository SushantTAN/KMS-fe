import DashLayout from "../layout/dashlayout/dash.layout";
import AddEmployee from "../pages/employee/create.page";
import ListEmployee from "../pages/employee/list.page";

export const employeeRoutes = [
  {
    path: "/employee",
    Component: DashLayout,
    children: [
      {
        index: true,
        path: "/employee",
        element: <ListEmployee />
      },
      {
        index: true,
        path: "/employee/create",
        element: <AddEmployee />
      },
    ]
  },

]