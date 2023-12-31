import { useSingleTour } from "../features/tours/useSingleTour";
import BookingForm from "./BookingForm";
import styles from "./TourBookingContainer.module.scss";
import TripSummary from "./TripSummary";

function TourBookingContainer() {
  const { tour } = useSingleTour();
  const { imageWelcome } = tour;

  return (
    <div style={{ backgroundColor: "var(--color-blue-dark" }}>
      <div className={styles.container}>
        <BookingForm />
        <TripSummary
          image={imageWelcome}
          slice="tour"
          disclaimer="   *Price does not include flight, accommodation, or additional costs.
          The total cost only covers the itinerary and any additional features."
        />
      </div>
    </div>
  );
}

export default TourBookingContainer;
