import { useEffect, useState } from "react";
import PageHeader from "../../conponents/pageHeader.component";
import axiosInstance from "../../requests";

const ListTraining = () => {

  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const response = await axiosInstance.get('/training');
      setList(response.data);
    } catch (err) {
      console.log(err);
    }
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
          <th>Training Name</th>
          <th>Project</th>
          <th>Employee</th>
        </tr>
      </thead>

      <tbody>
        { list.map((el, index) => <tr key={index}>
          <td>{el.project}</td>
          <td>{el.trainee}</td>
          <td>{el.employee}</td>
        </tr>)}
      </tbody>
    </table>
  </main>
}

export default ListTraining;