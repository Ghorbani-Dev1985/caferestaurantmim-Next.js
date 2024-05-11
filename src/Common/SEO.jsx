import Head from "next/head";

const SEO = ({title , desc}) => {
    return ( 
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Head>
     );
}
 
export default SEO;