import Script from 'next/script';
import { PrismicNextLink } from "@prismicio/next"; //always use this for internal links, links to other parts of the applicaiton
//also makes navigation happen as react rerender instead of full scale browser navigation. 
import Link from "next/link";
import { InlineWidget } from 'react-calendly';
import { useEffect } from 'react';

const CalendlyForm = ({ type }: { type?: string }) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <div className="calendly-inline-widget" data-url="https://calendly.com/christopherligeorge" style={{ minWidth: '320px', height: '700px' }}> </div>
        </>
    ); 

}

export default CalendlyForm
