import Bounded from "@/components/Bounded";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
              {children}
            </h2>
          ),
          em: ({ children }) => (
            <em className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              {children}
            </em>
          ),
        }}
      />

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {slice.items.map((item) => (
          <div
            className={clsx(
              "glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4", item.wide ? "md:col-span-2" : "md:col-span-1",
            )}
            key={asText(item.title)}
          >
            <h3 className="text-2xl">
              <PrismicText field={item.title} />
            </h3>
            <div className="max-w-md text-balance text-slate-300">
              <PrismicRichText field={item.body} />
            </div>
            <PrismicNextImage field={item.image} className="max-h-36 w-auto" />
          </div>
        ))}
      </div>
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45925352.js"></script>
    </Bounded>
  );
};

export default Bento;


//the item.title,body, image, the repeatable zones of this slice, need to be mapped unlike the
//unrepeatable zones. 

//need to use astext to convert item.title because item.title is richtext and needs to be converted into
//a string so it can iterate over text. 

//components section in prismicrichtext controls what is rendered to the DOM when prismic gets a certain type
// 