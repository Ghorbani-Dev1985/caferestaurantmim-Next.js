
import Http from '@/Services/HttpService';
import * as fs from 'fs'
const Sitemap = () => {
    return null
}
export default Sitemap;
 
export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'https://cafemim.ghorbani-dev.ir';

    const staticPaths = fs
    .readdirSync("src/pages")
    .filter((staticPage) => {
      return ![
        "api",
        "src/app",
        "dashboard",
        "_app.js",
        "_document.js",
        "not-found.jsx",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

    const { data : articles } = await Http.get("/articles");
    const filteredBlog = articles.filter(blog => blog.publish === true);
    const dynamicPaths = filteredBlog.map((article) => {
        return `${BASE_URL}/articles/${article.shortName}`
    })
    const allPaths =[ ...staticPaths , ...dynamicPaths ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${allPaths
            .map((url) => {
              return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `;
            })
            .join("")}
        </urlset>
    `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};
