import PageHeader from "../../conponents/pageHeader.component";
import styles from "../../styles/employee.module.scss";

const ListEmployee = () => {
  return <main className={`main-container ${styles["employee"]}`}>
    <PageHeader
      title="Employee"
      to="/employee/create"
    />

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Contributions</th>
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

export default ListEmployee;