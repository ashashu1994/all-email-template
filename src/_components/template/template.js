import React from 'react';
import '../../common-inline.css';
import Fasenra from '../fasenra/fasenra';
import Forxiga from '../forxiga/forxiga';
import Lynparza from '../lynparza/lynparza';
import Symbicort from '../symbicort/symbicort';
class Template extends React.Component {
    render() {
        const { brand, template } = this.props.match.params;
        return (
            <div id="brandcheckid" brandcheckid={brand}>
                {brand === "fasenra" ? <Fasenra template_type={template} />
                    : (brand === "forxiga") ? <Forxiga template_type={template} />
                        : (brand === "lynparza") ? <Lynparza template_type={template} />
                            : (brand === "symbicort") ? <Symbicort template_type={template} /> : ""}
            </div>
        )
    }
}

export default Template;