import { linkResolver } from '../prismicio';

const link = ({ data }) =>
    data.link_type === 'Web' ? data.url : linkResolver(data);

export default link;
