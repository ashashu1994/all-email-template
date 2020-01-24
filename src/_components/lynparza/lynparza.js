import React from 'react';
import './lynparza.css';
import LynparzaTemp1 from './lynparza-temp1';
import LynparzaTemp2 from './lynparza-temp2';
import LynparzaTemp3 from './lynparza-temp3';
class Lynparza extends React.Component {
    render() {
        const { template_type } = this.props;
        return (
            <>
                {(template_type === "template1") ?
                    <LynparzaTemp1 />
                    : (template_type === "template2") ?
                        <LynparzaTemp2 />
                        : (template_type === "template3") ?
                            <LynparzaTemp3 />
                            : ""
                }
            </>
        )
    }
}

export default Lynparza;