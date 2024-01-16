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

    {
      list.map((el, index) => <div key={index} className="card">
        <div>
          <h3>{el.name}</h3>
          <p className="bold">Total members: {el.totalMembers}</p>
        </div>

        <div>
          <div className="delete-chip" onClick={async () => {
            await axiosInstance.delete(`/project/${el._id}`);
            getData();
          }}>Delete</div>
        </div>
      </div>)
    }
  </main>
}

export default ListProject;