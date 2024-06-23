import Bounded from "@/components/Bounded";
import CalendlyForm from "@/components/CalendlyForm";
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
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} >
     <CalendlyForm/> 
    </Bounded>
  );
};

export default Booking;
