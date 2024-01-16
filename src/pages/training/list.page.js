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
      title="Instruction sessions"
      to="/training/create"
    />

    {
      list.map((el, index) => <div key={index} className="card">
        <div>
          <h3>{el.trainee}</h3>
          <p className="bold">Project: {getNameByProjectId(el.project)}</p>
          <p className="bold">Instructor: {getNameByEmployeeId(el.employee)}</p>
        </div>

        <div>
          <div className="delete-chip" onClick={async () => {
            await axiosInstance.delete(`/training/${el._id}`);
            getData();
          }}>Delete</div>
        </div>
      </div>)
    }

  </main>
}

export default ListTraining;