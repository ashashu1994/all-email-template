import React from 'react';
import CommonText from './common/custom_text';
import FS20 from './common/fs-20';
class Section2 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor={data.bgColor ? data.bgColor : "#fff"}>
                        <tbody>
                            <tr>
                                <td width="10" bgcolor={data.bgColor ? data.bgColor : "#fff"} style={{ backgroundColor: `${data.bgColor ? data.bgColor : "#fff"}` }}>&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor={data.bgColor ? data.bgColor : "#fff"}>
                                        <tbody>
                                            <tr>
                                                <td height={data.marginTop ? data.marginTop : "0px"} style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: `${data.marginTop ? data.marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <FS20
                                                    data={data.text}
                                                    bgColor={data.bgColor}
                                                    textColor={data.textColor}
                                                />
                                            </tr>
                                            <tr>
                                                <td height={data.marginBottom ? data.marginBottom : "0px"} style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: `${data.marginBottom ? data.marginBottom : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width="10" bgcolor={data.bgColor ? data.bgColor : "#fff"} style={{ backgroundColor: `${data.bgColor ? data.bgColor : "#fff"}` }}>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default Section2;