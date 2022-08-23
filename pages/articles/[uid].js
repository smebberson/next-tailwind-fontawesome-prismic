import Head from 'next/head';
import { SliceZone } from '@prismicio/react';

import { components } from '../../slices';
import { createClient } from '../../prismicio';
import { footer, navigation } from '../../lib/graph-query';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';

const Article = ({ page }) => (
    <div>
        <Head>
            <title>{page.data.title}</title>
            {page.data.description && (
                <meta name="description" content={page.data.description} />
            )}
            {page.data.robots && (
                <meta name="robots" content={page.data.robots} />
            )}
        </Head>
        <Navigation data={page.data.navigation.data} />
        <div className="py-16">
            <header className="max-w-prose mx-auto text-base text-center">
                {page.data.subtitle && (
                    <span className="block uppercase text-emerald-700 font-extrabold">
                        {page.data.subtitle}
                    </span>
                )}
                <h1 className="mt-2 block text-5xl font-bold">
                    {page.data.heading}
                </h1>
            </header>
            <div className="prose mx-auto mt-12">
                <SliceZone slices={page.data.slices} components={components} />
            </div>
        </div>
        {page.data?.footer?.data && <Footer data={page.data.footer.data} />}
    </div>
);

const graphQuery = `
{
    article {
        ...articleFields
        ${footer}
        ${navigation}
    }
}`;

export async function getServerSideProps({ params, previewData }) {
    const client = createClient({ previewData });
    const page = await client.getByUID('article', params.uid, { graphQuery });

    // Require all pages to have specific a navigation document.
    if (!page || !page.data.navigation.data) {
        return {
            notFound: true,
        };
    }

    return { props: { page } };
}

export default Article;
