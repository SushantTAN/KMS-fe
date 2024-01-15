import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProject = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    teamMembers: [{ name: "gg", }, { name: "ff" }]
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", formData)
    navigate("/training");
  }

  const teamMembers = [{ name: "gg", }, { name: "ff" }]

  return <main className={`main-container`}>
    <h1>Add Project</h1>

    <form>

      <label>Project name</label>
      <input name="name" value={formData.name} onChange={handleChange} />
      <br />

      <label>Team members</label>
      <select name="teamMembers" value={formData.trainer} onChange={(e) => {
        console.log(e.target.value);
      }}>
        <option value="">Select team members</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <div className="chip-container">
        {
          formData?.teamMembers?.map((el, index) => <span key={index} className="chip">{el.name} &nbsp; <span style={{ cursor: "pointer" }} onClick={() => {
            setFormData(prev => {
              let tempTeamMembers = [...prev.teamMembers];
              return { ...prev, teamMembers: tempTeamMembers.filter((_, teamIndex) => index !== teamIndex) }
            })
          }}>X</span></span>)
        }
      </div>
      <br />

      <div>
        <button style={{ display: "inline" }} type="button" onClick={handleSubmit}>Save</button>
      </div>
    </form>
  </main>
}

export default AddProject;