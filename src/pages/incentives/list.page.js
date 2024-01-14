import PageHeader from "../../conponents/pageHeader.component";

const ListIncentives = () => {
  return <main className={`main-container`}>
    <PageHeader
      title="Incentives"
      to="/incentives/create"
    />

    <table>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Bonus amt.</th>
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

export default ListIncentives;