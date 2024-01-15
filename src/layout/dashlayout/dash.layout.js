import { Link, Outlet } from "react-router-dom";
import styles from "../../styles/dash.module.scss";

const DashLayout = () => {
  return <>
    <header className={styles["header__container"]}>
      <div>
        <Link to={"/employee"}>Employee</Link>
      </div>
      <div>
        <Link to={"/training"}>Training</Link>
      </div>
      <div>
        <Link to={"/project"}>Project</Link>
      </div>
      {/* <div>
        <Link to={"/incentives"}>Incentives</Link>
      </div> */}
    </header>
    <Outlet />
  </>
}

export default DashLayout;