//created new case-study folder and [uid] folder within to handle routing from case study slice. 
//the case-study folder handles if someone just goes to the case-study directory but need to use 
//case-study/nike and other subdirectories. 

//the code below is imported from the <page snippet> option under page types --> case study. 

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("case_study", params.uid)
    .catch(() => notFound());


    //what is included here is in all pages and is repeated across all case-study slices. 
    //<bounded> defaults to a section, so we change it to as=article. 
  return ( 
    <Bounded as = "article"> 
    <div className = "grid relative place-items-center text-center gap-8 lg:gap-0">   
        <StarGrid />
        <h1 className = "text-7xl font-medium">
            <PrismicText field = {page.data.company} />
            <p className = "text-lg text-yellow-500">Case Study</p>

        </h1>
        <p className="mb-4 mt-8 max-w-xl text-lg text-slate-300">
            <PrismicText field = {page.data.description} />
        </p>
        <PrismicNextImage field = {page.data.logo_image} className = "rounded-lg" quality = {100}/>
    </div>
    <div className = "mx-auto">  
        <SliceZone slices={page.data.slices} components={components} />
    </div>
    </Bounded>
  )
  ;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("case_study", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("case_study");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
