import { Outlet, useNavigate } from "react-router-dom";
import styles from "../../styles/dash.module.scss";

const DashLayout = () => {
  const navigate = useNavigate();
  return <>
    <h1 style={{ background: "#f7e5b3", padding: "12px" }}>Knowlege management system</h1>
    <header className={styles["header__container"]}>

      <div className="side-link" onClick={() => navigate("/employee")}>
        User
      </div>
      <div className="side-link" onClick={() => navigate("/training")}>
        Instruction session
      </div>
      <div className="side-link" onClick={() => navigate("/project")}>
        Project
      </div>
      {/* <div>
        <Link to={"/incentives"}>Incentives</Link>
      </div> */}
    </header>
    <Outlet />
  </>
}

export default DashLayout;