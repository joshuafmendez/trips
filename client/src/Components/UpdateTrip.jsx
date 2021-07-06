import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import TripsRater from "../apis/TripsRater";

const UpdateTrip = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await TripsRater.get(`/${id}`);
        const { name, location, price_range } = data.trip;
        setName(name);
        setLocation(location);
        setPriceRange(price_range);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await TripsRater.put(`/${id}`, {
        name,
        location,
        price_range: priceRange,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location"></label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range"></label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-select"
            id="price_range inputGroupSelect04"
          >
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>

        <button onClick={handleSubmit} className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTrip;
