import React from 'react';
import SymbicortTemp1 from './symbicort-temp1';
import SymbicortTemp2 from './symbicort-temp2';
import SymbicortTemp3 from './symbicort-temp3';
class Symbicort extends React.Component {
    render() {
        const { template_type } = this.props;
        return (
            <>
                {(template_type === "template1") ? <SymbicortTemp1 />
                    : (template_type === "template2") ? <SymbicortTemp2 />
                        : (template_type === "template3") ? <SymbicortTemp3 />
                            : ""
                }
            </>
        )
    }
}

export default Symbicort;