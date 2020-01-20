import React from 'react';
import ForxigaTemplate1 from './forxiga_temp1';
class Forxiga extends React.Component {
    render() {
        const { template_type } = this.props;
        return (
            <>
                {(template_type === "template1") ?
                    <ForxigaTemplate1 />
                    : ""
                }
            </>
        )
    }
}

export default Forxiga;