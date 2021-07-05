const AddTrip = () => {
  return (
    <div className="d-flex mb-4 justify-content-center">
      <form className="row">
        <div className="col-sm-3">
          <input type="text" className="form-control" placeholder="name" />
        </div>
        <div className="col-sm-3">
          <input type="text" className="form-control" placeholder="location" />
        </div>
        <div className="col-sm-3">
          <select className="form-select" id="inputGroupSelect04">
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddTrip;
