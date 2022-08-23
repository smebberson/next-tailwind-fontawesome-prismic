import FooterButton from '../slices/FooterButton';

const Footer = ({ data }) => (
    <div className="bg-emerald-900 max-w-7xl mx-auto px-2 lg:px-8">
        <div className="flex justify-between p-4">
            <div className="text-emerald-50">{data.text || ''}</div>
            <div>
                {data.slices.map((item, itemIdx) => (
                    <FooterButton slice={item} key={itemIdx} />
                ))}
            </div>
        </div>
    </div>
);

export default Footer;
