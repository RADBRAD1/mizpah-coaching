//import { truncate } from "fs"
//import {env} from "./src/env/server.mjs"

/**  
@template {import('next').NextConfig} T
@param {T} config - a generic parameter that flows through to the return type
@constraint {{import('next').NextConfig}}
*/

function defineNextConfig(config) {
    return config
}

export default defineNextConfig({
    reactStrictMode:true,
    swcMinify:true,

    webpack(config) { 
        config.module.rules.push({test : /\.svg$/, use : [{loader: '@svgr/webpack', options : {icon: true}}], 
    })
    return config
    },
})













/* 
Original code
@type {import('next').NextConfig} 
const nextConfig = {};

export default nextConfig; */

/* 
The @ character is used to define path alias in Next.js. This is provided by webpack which is the module bundler used by Next.js.
In the example you provided, the paths property defines an alias for the components directory, using the @ symbol as a prefix. The asterisk * is a wildcard character that allows you to specify a pattern for matching file paths.
With this configuration, you can import components from the components directory using the @ alias, like import Footer from '@/components/Footer';
This will be resolved to the components/Footer.js file, based on the path mapping defined in the jsconfig.json file */





