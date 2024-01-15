import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../requests";

const AddEmployee = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    contributions: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/employee", {
        ...formData
      });
      navigate("/employee");
    } catch (err) {
      console.log("err", err);
    }
  }

  return <main className={`main-container`}>
    <h1>Add Employee</h1>

    <form>
      <label>Employee name</label>
      <input name="name" value={formData.name} onChange={handleChange} />
      <br />

      <label>Role</label>
      <input name="role" value={formData.role} onChange={handleChange} />
      <br />


      <label>Contributions</label>
      <input name="contributions" value={formData.contributions} onChange={handleChange} />
      <br />

      <div>
        <button style={{ display: "inline" }} type="button" onClick={handleSubmit}>Save</button>
      </div>
    </form>
  </main>
}

export default AddEmployee;