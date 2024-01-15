import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../requests";

const AddProject = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    totalMembers: 0,
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/project", {
        ...formData
      });
      navigate("/project");
    } catch (err) {
      console.log("err", err);
    }
  }

  return <main className={`main-container`}>
    <h1>Add Project</h1>

    <form>

      <label>Project name</label>
      <input name="name" value={formData.name} onChange={handleChange} />
      <br />

      <label>No. of Team members</label>
      <input name="totalMembers" value={formData.totalMembers} onChange={handleChange} type="number" />
      {/* <div className="chip-container">
        {
          formData?.teamMembers?.map((el, index) => <span key={index} className="chip">{el.name} &nbsp; <span style={{ cursor: "pointer" }} onClick={() => {
            setFormData(prev => {
              let tempTeamMembers = [...prev.teamMembers];
              return { ...prev, teamMembers: tempTeamMembers.filter((_, teamIndex) => index !== teamIndex) }
            })
          }}>X</span></span>)
        }
      </div> */}
      <br />

      <div>
        <button style={{ display: "inline" }} type="button" onClick={handleSubmit}>Save</button>
      </div>
    </form>
  </main>
}

export default AddProject;