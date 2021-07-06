import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import TripsRater from "../apis/TripsRater";
import { TripsStore } from "../store/TripsStore";
import AddReview from "./AddReview";
import ReviewsCard from "./ReviewsCard";
import StarRating from "./StarRating";

const DetailTrip = () => {
  const { id } = useParams();
  const { selectedTrip, setSelectedTrip } = useContext(TripsStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await TripsRater.get(`/${id}`);
        setSelectedTrip(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, selectedTrip, setSelectedTrip]);
  return (
    <div>
      {selectedTrip && (
        <>
          <h1 className="text-center">{selectedTrip.trip.name}</h1>
          <div className="text-center">
            <StarRating rating={selectedTrip.trip.avg_rating} />
            <span className="text-warning ml-1">
              {selectedTrip.trip.count ? `(${selectedTrip.trip.count})` : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <AddReview />
            <ReviewsCard reviews={selectedTrip.review} />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailTrip;
