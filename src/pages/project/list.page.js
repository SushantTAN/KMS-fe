import PageHeader from "../../conponents/pageHeader.component";

const ListProject = () => {
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
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>sus</td>
          <td>my role</td>

        </tr>
        <tr>
          <td>sus</td>
          <td>my role</td>

        </tr><tr>
          <td>sus</td>
          <td>my role dygad iwgdiwgeidweig iewg iwe iu ewi ciew ic ewcwe uc </td>
        </tr>
      </tbody>
    </table>
  </main>
}

export default ListProject;