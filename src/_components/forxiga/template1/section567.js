import React from 'react';
import Section5 from './section5';
import Section6 from './section6';
import Section7 from './section7';
class Section567 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <tr>
                    <td height="30" style={{ background: "#544e5c", lineHeight: "30px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                </tr>
                {data.section5 && data.section5.map(function (section5, section5Index) {
                    return (
                        <React.Fragment key={section5Index}>
                            <Section5 data={section5} />
                        </React.Fragment>
                    )
                })}
                {data.section6 && data.section6.map(function (section6, section6Index) {
                    return (
                        <React.Fragment key={section6Index}>
                            <Section6 data={section6} />
                        </React.Fragment>
                    )
                })}
                {data.section7 && data.section7.map(function (section7, section7Index) {
                    return (
                        <React.Fragment key={section7Index}>
                            <Section7 data={section7} />
                        </React.Fragment>
                    )
                })}
            </>
        )
    }
}

export default Section567;