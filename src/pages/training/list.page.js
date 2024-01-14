import PageHeader from "../../conponents/pageHeader.component";

const ListTraining = () => {
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
        <tr>
          <td>sus</td>
          <td>my role</td>
          <td>something</td>
        </tr>
        <tr>
          <td>sus</td>
          <td>my role</td>
          <td>something</td>
        </tr><tr>
          <td>sus</td>
          <td>my role dygad iwgdiwgeidweig iewg iwe iu ewi ciew ic ewcwe uc </td>
          <td>something iyagi cgicisdcisicdsicids ciusdiuhiushdic iu jhqgd iqgi wegdweyg ewiyg iw</td>
        </tr>
      </tbody>
    </table>
  </main>
}

export default ListTraining;