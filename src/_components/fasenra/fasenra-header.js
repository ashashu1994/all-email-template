import React from 'react';
import CommonText from '../_common/custom_text';
class FasenraHeader extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td width="100%" bgcolor="#fff">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#fff">
                        <tbody>
                            <tr>
                                <td width="10" style={{ "backgroundColor": "#fff" }}>&nbsp;</td>
                                <td >
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#fff">
                                        <tbody>
                                            <tr>
                                                <td height="15" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                            </tr>
                                            {data.preheader_text &&
                                                <>
                                                    <tr>
                                                        <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>
                                                            {data.preheader_text.map(function (commonTxt, commonTxtIndex) {
                                                                return (
                                                                    <CommonText commonTxt={commonTxt} />
                                                                )
                                                            })}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                            }
                                            {data.title && <>
                                                <tr>
                                                    <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px", "textAlign": "justify" }}>
                                                        {data.title.map(function (commonTxt, commonTxtIndex) {
                                                            return (
                                                                <CommonText commonTxt={commonTxt} />
                                                            )
                                                        })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="15" style={{ "background": "#fff", "lineHeight": "15px", "height": "8px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>
                                            }
                                            {data.click_text &&
                                                <>
                                                    {data.click_text.map(function (name, index) {
                                                        return (
                                                            <>
                                                                <tr key={index}>
                                                                    <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "height": "8px", "verticalAlign": "top", "color": "#000", "textAlign": "left", "fontSize": "11px" }}>
                                                                        {name.content.map(function (commonTxt, commonTxtIndex) {
                                                                            return (
                                                                                <CommonText commonTxt={commonTxt} />
                                                                            )
                                                                        })}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="1" style={{ "background": "#fff", "lineHeight": "1px", "height": "1px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })}
                                                    <tr>
                                                        <td height="15" style={{ "background": "#fff", "lineHeight": "15px", "height": "8px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                </td>
                                <td width="30" style={{ "backgroundColor": "#fff" }}>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default FasenraHeader;