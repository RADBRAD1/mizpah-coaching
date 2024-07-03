import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import CalendlyForm from "@/components/CalendlyForm";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Appointments`.
 */
export type AppointmentsProps = SliceComponentProps<Content.AppointmentsSlice>;

/**
 * Component for "Appointments" Slices.
 */
const Appointments = ({ slice }: AppointmentsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} >
         
         <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
              {children}
            </h2>), em: ({ children }) => (
            <em className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              {children}
            </em>
          ),}}/>

    <ButtonLink field = {slice.primary.button_link} className = "mt-6" >
      {slice.primary.button_text || "Learn More"}
    </ButtonLink>

        
      <div className = "text-balance"> 
      <CalendlyForm/> 
      </div>
     
     
      </Bounded>
  );
};

export default Appointments;
