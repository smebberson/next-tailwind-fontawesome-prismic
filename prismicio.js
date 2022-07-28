import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import sm from './sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

export function linkResolver(doc) {
    if (doc.type === 'homepage') {
        return '/';
    }

    if (doc.type === 'article') {
        return `/articles/${doc.uid}`;
    }

    return null;
}

export function createClient(config = {}) {
    const client = prismic.createClient(endpoint, { ...config });

    enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req,
    });

    return client;
}
