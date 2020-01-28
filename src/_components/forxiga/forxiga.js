import React from 'react';
import ForxigaTemplate1 from './forxiga_temp1';
import ForxigaTemplate2 from './forxiga_temp2';
import ForxigaTemplate3 from './forxiga_temp3';
class Forxiga extends React.Component {
    render() {
        const { template_type } = this.props;
        return (
            <>
                {(template_type === "template1") ?
                    <ForxigaTemplate1 />
                    : (template_type === "template2") ?
                        <ForxigaTemplate2 />
                        : (template_type === "template3") ?
                            <ForxigaTemplate3 /> : ""
                }
            </>
        )
    }
}

export default Forxiga;