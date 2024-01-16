import { useEffect, useState } from "react";
import PageHeader from "../../conponents/pageHeader.component";
import styles from "../../styles/employee.module.scss";
import axiosInstance from "../../requests";

const ListEmployee = () => {

  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const response = await axiosInstance.get('/employee');
      setList(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <main className={`main-container ${styles["employee"]}`}>
    <PageHeader
      title="User"
      to="/employee/create"
    />

    {
      list.map((el, index) => <div key={index} className="card">
        <div>
          <h3>{el.name}</h3>
          <p className="bold">Role: {el.role}</p>
          <p className="bold">Contribution: {el.contributions}</p>
        </div>

        <div>
          <div className="delete-chip" onClick={async () => {
            await axiosInstance.delete(`/employee/${el._id}`);
            getData();
          }}>Delete</div>
        </div>
      </div>)
    }
  </main>
}

export default ListEmployee;