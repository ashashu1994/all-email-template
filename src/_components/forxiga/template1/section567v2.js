import React from 'react';
import Section5V2 from './section5v2';
class Section567V2 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {data.section5 && data.section5.map(function (section5, section5Index) {
                    return (
                        <React.Fragment key={section5Index}>
                            <Section5V2 data={section5} />
                        </React.Fragment>
                    )
                })}
            </>
        )
    }
}

export default Section567V2;