import { useEffect, useState } from "react";
import PageHeader from "../../conponents/pageHeader.component";
import axiosInstance from "../../requests";

const ListProject = () => {

  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const response = await axiosInstance.get('/project');
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
      title="Project"
      to="/project/create"
    />

    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Total members</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {list.map((el, index) => <tr key={index}>
          <td>{el.name}</td>
          <td>{el.totalMembers}</td>
          <td>
            <div className="delete-chip" onClick={async () => {
              await axiosInstance.delete(`/project/${el._id}`);
              getData();
            }}>Delete</div>

          </td>

        </tr>)}

      </tbody>
    </table>
  </main>
}

export default ListProject;