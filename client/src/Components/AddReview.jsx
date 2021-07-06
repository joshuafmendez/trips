import { useState } from "react";
import { useParams } from "react-router-dom";
import TripsRater from "../apis/TripsRater";

const AddReview = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("Rating");
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await TripsRater.post(`/${id}/addReview`, {
        name,
        rating,
        body: review,
      });
      setName("");
      setRating("Rating");
      setReview("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex mb-2 justify-content-center">
      <form>
        <div className="row">
          <div className="form-group col-7">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="form-control"
              type="text"
              placeholder="name"
            />
          </div>
          <div className="form-group col-5">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="form-select"
              id="rating inputGroupSelect04"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review"></label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            name="review"
            id="review"
            className="form-control"
            placeholder="review"
          ></textarea>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
