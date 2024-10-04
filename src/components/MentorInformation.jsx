

const MentorInformation = ({ details }) => {
  return (
    <>
      <div className="me-5">
        <h3 className="text-blue text-center mb-4">{details.name} - Mentor SheMentors</h3>
        <p className="my-0"><span className="text-blue fw-bold">Wilayah asal: </span> {details.asalDaerah}</p>
        <p className="my-0"><span className="text-blue fw-bold">Pendidikan: </span> {details.universitas}</p>
        <img
          src="${details.avatar}"
          className="d-block d-md-none img-fluid mx-auto rounded p-3" alt="" />
        <p className="text-justify my-3">{details.profile}</p>
        <p className="text-blue fw-bold">Prestasi:</p>
        <ul className="text-justify">
          <li>{details.prestasi1}</li>
          <li>{details.prestasi2}</li>
          <li>{details.prestasi3}</li>
        </ul>
      </div>
    </>
  )
}

export default MentorInformation
