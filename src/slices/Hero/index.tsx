import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative">
     <StarGrid />
     {isFilled.richText(slice.primary.heading) && ( 
      <h1>
      <PrismicText field={slice.primary.heading} />
      </h1>
     )}
     
     <PrismicRichText field={slice.primary.body_paragraph} />
     <ButtonLink field={slice.primary.button_link}>
      {slice.primary.button_label}
      </ButtonLink>
     <PrismicNextImage field={slice.primary.image} />
     </div>
    
    </Bounded>
  );
};

export default Hero;
