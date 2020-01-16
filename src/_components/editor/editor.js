import React from 'react';
import data from "../../data";
import '../../common-inline.css';
import Fasenra from '../fasenra/fasenra';
import Forxiga from '../forxiga/forxiga';
class Template extends React.Component {
    render() {
        return (
            <>
                {data.brand === "forxiga" ? <Forxiga data={data} /> : <Fasenra data={data} />}
            </>
        )
    }
}

export default Template;