import DashLayout from "../layout/dashlayout/dash.layout";
import AddIncentives from "../pages/incentives/create.page";
import ListIncentives from "../pages/incentives/list.page";

export const incentivesRoutes = [
  {
    path: "/incentives",
    Component: DashLayout,
    children: [
      {
        index: true,
        path: "/incentives",
        element: <ListIncentives />
      },
      {
        index: true,
        path: "/incentives/create",
        element: <AddIncentives />
      },
    ]
  },

]