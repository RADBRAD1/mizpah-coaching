import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `CaseStudy`.
 */
export type CaseStudyProps = SliceComponentProps<Content.CaseStudySlice>;

/**
 * Component for "CaseStudy" Slices.
 */
//when we fetch data from different case study types in prismic, reference id# that references the reference id of the slice type
//we fetch from inside the react component, so need to make it async and enclose JSX.element in a promise
const CaseStudy = async ({ slice }: CaseStudyProps): Promise<JSX.Element>=> {
  const client = createClient();

  const caseStudies = await Promise.all(
    // 
    slice.items.map(async (item)=> {
      //if there is a case study filled here, then we can fetch the case study. 
      if(isFilled.contentRelationship(item.case_study)) 
      {
        //we use <> to specifically type the casestudy type, and get by id  with item.case_study_id value. 
        return await client.getByID<Content.CaseStudyDocument>
        (
          item.case_study.id
        )
      }
    } )
     )
  //now fetch the case studies
  //use PrismicText instead of prismicrichtext when 
  //
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className = "max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl"> 
      <PrismicText field={slice.primary.heading} />
      </h2>
    
    <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300"> 
      <PrismicRichText field={slice.primary.body} />
    </div>
     
     
     <div className="mt-20 grid gap-16">
      {caseStudies.map((caseStudy, index)=> (
        caseStudy && (
       <div key = {caseStudy.id} className = "relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3 "> 
         <div className="flex col-span-1 flex-col justify-center gap-4"> 
         
          <h3 className = "text-4xl"> 
            <PrismicText field = {caseStudy.data.company} />
          </h3>
          <div className = "max-w-md"> 
            <PrismicRichText field = {caseStudy.data.description} />
          </div>
            <PrismicNextLink document = {caseStudy} className = "after:absolute after:inset-0 hover:underline">
              Read <PrismicText field = {caseStudy.data.company} /> case study
            </PrismicNextLink>
        </div>
        <PrismicNextImage field = {caseStudy.data.logo_image} quality = {100} className = {clsx( 
          "rounded-xl lg:col-span-2", index % 2 && "md:-order-1",
        )} />
        </div>
        )
      )) }
     </div>
    </Bounded>
  );
};

export default CaseStudy;
