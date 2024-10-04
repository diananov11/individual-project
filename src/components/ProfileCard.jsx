

const ProfileCard = ({ details }) => {
  return (
    <>
      <div className="card mx-auto " style={{ width: "18rem" }}>
        <img
          src={details.avatar}
          className="card-img-top p-3" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{details.name}</h5>
          <h6 className="mb-5">{details.asalDaerah}</h6>
        </div>
      </div>

      <section className="slot-details text-center border my-5 py-5">
        <h5 className="text-blue">Slot mentorship Intan tinggal</h5>
        <h2 className="fw-bold text-blue">{details.slot} lagi✨</h2>
      </section>
    </>
  )
}

export default ProfileCard
