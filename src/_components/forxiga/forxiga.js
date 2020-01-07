import React from 'react';
import ForxigaTemplate1 from './forxiga_temp1';
class Forxiga extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {(data.template_type === "template1") ?
                    <ForxigaTemplate1 data={data} />
                    : ""
                }
            </>
        )
    }
}

export default Forxiga;