import React from 'react';
import CommonText from '../../_common/custom_text';
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
                        <Section5 data={section5} />
                    )
                })}
                {data.section6 && data.section6.map(function (section6, section6Index) {
                    return (
                        <Section6 data={section6} />
                    )
                })}
                {data.section7 && data.section7.map(function (section7, section7Index) {
                    return (
                        <Section7 data={section7} />
                    )
                })}
            </>
        )
    }
}

export default Section567;