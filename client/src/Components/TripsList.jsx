import { useContext, useEffect } from "react";
import TripsRater from "../apis/TripsRater";
import { TripsStore } from "../store/TripsStore";

const TripsList = () => {
  const { trips, setTrips } = useContext(TripsStore);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await TripsRater.get("/");
        console.log(data.trip);
        setTrips(data.trip);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setTrips]);

  return (
    <div>
      <table className="table table-hover table-striped">
        <thead>
          <tr className="bg-secondary">
            <th scope="col">Trip</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="table-dark">
          {trips && trips.map((trip) => {
            const { id, name, location, price_range } = trip;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{location}</td>
                <td>{"$".repeat(price_range)}</td>
                <td>Reviews</td>
                <td>
                  <button className="btn btn-warning">Update</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TripsList;
