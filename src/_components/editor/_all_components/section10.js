import React from 'react';
import FS11 from './common/fs-11';
import FS20 from './common/fs-20';
class Section10 extends React.Component {
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
                                            {data.preheader_text && <>
                                                <tr>
                                                    <FS11
                                                        data={data.preheader_text}
                                                        bgColor={data.bgColor}
                                                        textColor={data.textColor}
                                                    />
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {data.title && <>
                                                <tr>
                                                    <FS20
                                                        data={data.title}
                                                        bgColor={data.bgColor}
                                                        textColor={data.textColor}
                                                    />
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {data.click_text && data.click_text.map(function (click_text, click_textIndex) {
                                                return (
                                                    <React.Fragment key={click_textIndex}>
                                                        <tr>
                                                            <FS11
                                                                data={click_text.multiline}
                                                                bgColor={data.bgColor}
                                                                textColor={data.textColor}
                                                            />
                                                        </tr>
                                                        <tr>
                                                            <td height="1" style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: "1px", verticalAlign: "top", height: "1px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })}
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
            </tr >
        )
    }
}

export default Section10;