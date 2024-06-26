
import Bounded from "@/components/Bounded";
import type { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <Bounded>
      <div className="prose prose-invert prose-lg prose-slate">
        <PrismicRichText
          field={slice.primary.content}
          components={components}
        />
      </div>
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45925352.js"></script>
    </Bounded>
  );
}


/*
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react"; */ 

/**
 * Props for `RichText`.
 */


//export type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
/*
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for rich_text (variation: {slice.variation}) Slices
    </section>
  );
};

export default RichText;
*/