import { SliceZone } from '@prismicio/react';

import Navigation from '../components/navigation';
import { components } from '../slices';
import { createClient } from '../prismicio';
import { navigation } from '../lib/graph-query';

const HomePage = ({ page }) => (
    <div>
        <Navigation data={page.data.navigation.data} />
        <div className="bg-white">
            <div className="relative pb-32 bg-emerald-500">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-emerald-900 tracking-wide uppercase">
                            {page.data.heroTag}
                        </h2>
                        <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                            {page.data.heroTitle}
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-emerald-50">
                            {page.data.heroDescription}
                        </p>
                    </div>
                </div>
            </div>
            <section className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8">
                <h2 className="sr-only" id="features-heading">
                    Features
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {page.data.heroHighlights.map((highlight, index) => (
                        <div
                            className="flex flex-col bg-white rounded-2xl shadow-xl"
                            key={index}
                        >
                            <div className="flex-1 relative pt-12 px-6 pb-8 md:px-8">
                                <h3 className="text-xl font-medium text-gray-900">
                                    {highlight.highlightTitle}
                                </h3>
                                <p className="mt-4 text-base text-gray-500">
                                    {highlight.highlightDescription}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="prose mx-auto mt-12">
                <SliceZone slices={page.data.slices} components={components} />
            </section>
        </div>
    </div>
);

const graphQuery = `
{
    homepage {
        ...homepageFields
        ${navigation}
    }
}`;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });
    const page = await client.getSingle('homepage', { graphQuery });

    return { props: { page } };
}

export default HomePage;
