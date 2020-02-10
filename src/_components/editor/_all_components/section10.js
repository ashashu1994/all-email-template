import React from 'react';
import FS11 from './common/fs-11';
import FS20 from './common/fs-20';
class Section10 extends React.Component {
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
                                            {data.preheader_text && <>
                                                <tr>
                                                    <FS11
                                                        data={data.preheader_text}
                                                        bgColor={bgColor}
                                                        textColor={textColor}
                                                    />
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {data.title && <>
                                                <tr>
                                                    <FS20
                                                        data={data.title}
                                                        bgColor={bgColor}
                                                        textColor={textColor}
                                                    />
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {data.click_text && data.click_text.map(function (click_text, click_textIndex) {
                                                return (
                                                    <React.Fragment key={click_textIndex}>
                                                        <tr>
                                                            <FS11
                                                                data={click_text.multiline}
                                                                bgColor={bgColor}
                                                                textColor={textColor}
                                                            />
                                                        </tr>
                                                        <tr>
                                                            <td height="1" style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: "1px", verticalAlign: "top", height: "1px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })}
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
            </tr >
        )
    }
}

export default Section10;