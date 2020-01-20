import React from 'react';
import '../../common-inline.css';
import Fasenra from '../fasenra/fasenra';
import Forxiga from '../forxiga/forxiga';
class Template extends React.Component {
    render() {
        const { brand, template } = this.props.match.params;
        return (
            <>
                {brand === "fasenra" ? <Fasenra template_type={template} />
                    : (brand === "forxiga") ? <Forxiga template_type={template} /> : ""}
            </>
        )
    }
}

export default Template;