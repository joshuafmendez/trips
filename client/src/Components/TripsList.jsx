import { useContext, useEffect } from "react";
import TripsRater from "../apis/TripsRater";
import { TripsStore } from "../store/TripsStore";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";

const TripsList = () => {
  const { trips, setTrips } = useContext(TripsStore);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await TripsRater.get("/");
        setTrips(data.trip);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setTrips]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await TripsRater.delete(`/${id}`);
      setTrips(
        trips.filter((trip) => {
          return trip.id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/trips/${id}/update`);
  };

  const handleTripSelection = (id) => {
    history.push(`/trips/${id}`);
  };

  const renderRating = (trip) => {
    if(!trip.count){
      return <span className="text-warning">0 reviews</span>
    }
    console.log(trip)
    return (
      <div>
        <StarRating rating={trip.avg_rating} />
        <span className="text-warning ml-1">({trip.count})</span>
      </div>
    );
  };

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
          {trips &&
            trips.map((trip) => {
              const { id, name, location, price_range } = trip;
              return (
                <tr key={id} onClick={() => handleTripSelection(id)}>
                  <td>{name}</td>
                  <td>{location}</td>
                  <td>{"$".repeat(price_range)}</td>
                  <td>{renderRating(trip)}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
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
