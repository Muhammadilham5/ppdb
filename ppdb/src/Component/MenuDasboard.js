import  people  from "../asset/icons8_people_2.ico";

const MenuDashboard = () => {
  return (
    <div>
        <div className="pt-5">
        <h2>Dashboard</h2>
      <div className="row">
      <div className="col-8 col-sm-10 col-md-6 col-lg-4">
          <div className="card text-bg-danger">
            <div className="p-4">
              <img src={people} alt="..."></img>
              <h3 className="text-end">2</h3>
              <p className="text-end">butuh verifikasi PPDB</p>
            </div>
          </div>
        </div>

        <div className="col-8 col-sm-10 col-md-6 col-lg-4">
          <div className="card text-bg-success">
            <div className="p-4">
              <img src={people} alt="..."></img>
              <h3 className="text-end">2</h3>
              <p className="text-end">siswa telah terdaftar</p>
            </div>
          </div>
        </div>

        <div className="col-8 col-sm-10 col-md-6 col-lg-4">
          <div className="card text-bg-primary">
            <div className="p-4">
              <img src={people} alt="..."></img>
              <h3 className="text-end">2</h3>
              <p className="text-end">siswa belum diverifikasi</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default MenuDashboard;
