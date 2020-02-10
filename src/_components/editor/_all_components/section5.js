import React from 'react';
import FS15 from './common/fs-15';
class Section5 extends React.Component {
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
                                                <FS15
                                                    data={data}
                                                    bgColor={bgColor}
                                                    textColor={textColor}
                                                />
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

export default Section5;