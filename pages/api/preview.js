import { createClient, linkResolver } from '../../prismicio';
import { redirectToPreviewURL, setPreviewData } from '@prismicio/next';

const preview = async (req, res) => {
    const client = createClient({ req });
    await setPreviewData({ req, res });
    await redirectToPreviewURL({ req, res, client, linkResolver });
};

export default preview;
