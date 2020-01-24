import React from 'react';
import './fasenra.css';
import FasenraTemp1 from './fasenra-template1';
import FasenraTemp2 from './fasenra-template2';
import FasenraTemp3 from './fasenra-template3';
import FasenraTemp4 from './fasenra-template4';
import FasenraTemp5 from './fasenra-template5';
class Fasenra extends React.Component {
    render() {
        const { template_type } = this.props;
        return (
            <>
                {(template_type === "template1") ? <FasenraTemp1 template_type={template_type} /> : (template_type === "template2") ? <FasenraTemp2 template_type={template_type} /> : (template_type === "template3") ? <FasenraTemp3 template_type={template_type} /> : (template_type === "template4") ? <FasenraTemp4 template_type={template_type} /> : <FasenraTemp5 template_type={template_type} />}
            </>
        )
    }
}

export default Fasenra;