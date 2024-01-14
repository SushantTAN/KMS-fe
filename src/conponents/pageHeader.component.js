import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, to }) => {

  const navigate = useNavigate();

  return <div className="page-header">
    <h1>{title}</h1>
    <div>
      <button onClick={() => navigate(to)}>Add new</button>
    </div>
  </div>
}

export default PageHeader;