import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTraining = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    project: undefined,
    traineeName: "",
    trainer: undefined,
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", formData)
    navigate("/training");
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
      <input name="traineeName" value={formData.traineeName} onChange={handleChange} />
      <br />

      <label>Trainer</label>
      <select name="trainer" value={formData.trainer} onChange={handleChange}>
        <option value="">Select trainer</option>
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