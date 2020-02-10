import React from 'react';
import FS12 from './common/fs-12';
class Section6 extends React.Component {
    render() {
        const { data, marginTop, marginBottom, bgColor, textColor } = this.props;
        return (
            <tr>
                <td>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"}>
                        <tbody>
                            <tr>
                                <td width="10" bgcolor={bgColor ? bgColor : "#fff"} style={{ backgroundColor: `${bgColor ? bgColor : "#fff"}` }}>&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"}>
                                        <tbody>
                                            <tr>
                                                <td height={marginTop ? marginTop : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginTop ? marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ lineHeight: "14px" }}>
                                                        <tbody>
                                                            <tr>
                                                                <td width="11" height="10" align="top" valign="top" style={{ background: `${bgColor ? bgColor : "#fff"}`, color: `${textColor ? textColor : "#fff"}`, textAlign: "left", fontSize: "13px" }}>•</td>
                                                                <FS12
                                                                    data={data}
                                                                    bgColor={bgColor}
                                                                    textColor={textColor}
                                                                />
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height={marginBottom ? marginBottom : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginBottom ? marginBottom : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width="10" bgcolor={bgColor ? bgColor : "#fff"} style={{ backgroundColor: `${bgColor ? bgColor : "#fff"}` }}>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default Section6;