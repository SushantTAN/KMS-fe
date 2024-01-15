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
      title="Employee"
      to="/employee/create"
    />

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Contributions</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {list.map((el, index) => <tr key={index}>
          <td>{el.name}</td>
          <td>{el.role}</td>
          <td>{el.contributions}</td>
          <td><div className="delete-chip" onClick={async () => {
            await axiosInstance.delete(`/employee/${el._id}`);
            getData();
          }}>Delete</div></td>
        </tr>)}
      </tbody>
    </table>
  </main>
}

export default ListEmployee;