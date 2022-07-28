import { SliceSimulator } from '@prismicio/slice-simulator-react';
import { SliceZone } from '@prismicio/react';

import state from '../.slicemachine/libraries-state.json';
import { components } from '../slices/index';

const SliceSimulatorPage = () => (
    <SliceSimulator
        sliceZone={({ slices }) => (
            <SliceZone slices={slices} components={components}></SliceZone>
        )}
        state={state}
    ></SliceSimulator>
);

export default SliceSimulatorPage;
