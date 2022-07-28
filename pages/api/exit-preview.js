import { exitPreview } from '@prismicio/next';

const exit = (req, res) => exitPreview({ req, res });

export default exit;
