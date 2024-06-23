import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Booking`.
 */
export type BookingProps = SliceComponentProps<Content.BookingSlice>;

/**
 * Component for "Booking" Slices.
 */
const Booking = ({ slice }: BookingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for booking (variation: {slice.variation}) Slices
    </section>
  );
};

export default Booking;
