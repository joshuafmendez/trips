import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import TripsRater from "../apis/TripsRater";
import { TripsStore } from "../store/TripsStore";

const DetailTrip = () => {
  const { id } = useParams();
  const { selectedTrip, setSelectedTrip } = useContext(TripsStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await TripsRater.get(`/${id}`);
        setSelectedTrip(data.trip);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, setSelectedTrip]);
  return (
    <div>
      <h1 className="text-center">{selectedTrip && selectedTrip.name}</h1>
    </div>
  );
};

export default DetailTrip;
