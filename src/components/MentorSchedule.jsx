

const MentorSchedule = ({ details }) => {
  return (
    <>
      <h5 className="text-blue">Jadwal Mentoring Mentor</h5>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th scope=" col">Hari</th>
            <th scope="col">Jam (WIB)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{details.hari1}</td>
            <td>{details.jam1}</td>
          </tr>
          <tr>
            <td>{details.hari2}</td>
            <td>{details.jam2}</td>
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default MentorSchedule
