import ListTraining from "../pages/training/list.page";
import AddTraining from "../pages/training/create.page";
import DashLayout from "../layout/dashlayout/dash.layout";


export const trainingRoutes = [
  {
    path: "/training",
    Component: DashLayout,
    children: [
      {
        index: true,
        path: "/training",
        element: <ListTraining />
      },
      {
        index: true,
        path: "/training/create",
        element: <AddTraining />

      },
    ]
  },

]