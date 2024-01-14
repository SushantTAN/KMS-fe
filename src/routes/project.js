import DashLayout from "../layout/dashlayout/dash.layout";
import AddProject from "../pages/project/create.page";
import ListProject from "../pages/project/list.page";

export const projectRoutes = [
  {
    path: "/project",
    Component: DashLayout,
    children: [
      {
        index: true,
        path: "/project",
        element: <ListProject />
      },
      {
        index: true,
        path: "/project/create",
        element: <AddProject />

      },
    ]
  },

]