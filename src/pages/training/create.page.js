import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../requests";

const AddTraining = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    project: undefined,
    trainee: "",
    employee: undefined,
  });
  const [projectList, setProjectList] = useState([]);

  const getOptions = async () => {
    try {
      const response = await axiosInstance.get('/project');
      setProjectList(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getOptions();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data", formData)

    try {
      await axiosInstance.post("/training", {
        ...formData
      });
      navigate("/training");
    } catch (err) {
      console.log("err", err);
    }
  }

  return <main className={`main-container`}>
    <h1>Add Training</h1>

    <form>
      <label>Project</label>
      <select name="project" value={formData.project} onChange={handleChange}>
        <option value="">Select project</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <br />

      <label>Trainee name</label>
      <input name="trainee" value={formData.trainee} onChange={handleChange} />
      <br />

      <label>employee</label>
      <select name="employee" value={formData.employee} onChange={handleChange}>
        <option value="">Select employee</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <br />

      <div>
        <button style={{ display: "inline" }} type="button" onClick={handleSubmit}>Save</button>
      </div>
    </form>
  </main>
}

export default AddTraining;