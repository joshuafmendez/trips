import { useContext, useState } from "react";
import TripsRater from "../apis/TripsRater";
import { TripsStore } from "../store/TripsStore";

const AddTrip = () => {
  const { addTrip } = useContext(TripsStore);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await TripsRater.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      addTrip(data.trip);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex mb-4 justify-content-center">
      <form className="row">
        <div className="col-sm-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="name"
          />
        </div>
        <div className="col-sm-3">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="form-control"
            placeholder="location"
          />
        </div>
        <div className="col-sm-3">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-select"
            id="inputGroupSelect04"
          >
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <div className="col-auto">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTrip;
