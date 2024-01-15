import { useEffect, useState } from "react";
import PageHeader from "../../conponents/pageHeader.component";
import axiosInstance from "../../requests";

const ListTraining = () => {

  const [list, setList] = useState([]);

  const [projectList, setProjectList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);


  const getData = async () => {
    try {
      const response = await axiosInstance.get('/training');
      setList(response.data);
    } catch (err) {
      console.log(err);
    }

    try {
      const response = await axiosInstance.get('/project');
      setProjectList(response.data);
    } catch (err) {
      console.log(err);
    }

    try {
      const response = await axiosInstance.get('/employee');
      setEmployeeList(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const getNameByProjectId = (id) => {
    return projectList?.find(el => el._id === id)?.name;
  }

  const getNameByEmployeeId = (id) => {
    return employeeList?.find(el => el._id === id)?.name;
  }

  useEffect(() => {
    getData();
  }, []);

  return <main className={`main-container`}>
    <PageHeader
      title="Training"
      to="/training/create"
    />

    <table>
      <thead>
        <tr>
          <th>Trainee Name</th>
          <th>Project</th>
          <th>Employee</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {list.map((el, index) => <tr key={index}>
          <td>{el.trainee}</td>
          <td>{getNameByProjectId(el.project)}</td>
          <td>{getNameByEmployeeId(el.employee)}</td>
          <td>
            <div className="delete-chip" onClick={async () => {
              await axiosInstance.delete(`/training/${el._id}`);
              getData();
            }}>Delete</div>
          </td>
        </tr>)}
      </tbody>
    </table>
  </main>
}

export default ListTraining;