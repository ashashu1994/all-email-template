import React from 'react';
import CommonText from '../_common/custom_text';
class FasenraFooter extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {data.footer_text &&
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
                                                        <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                    </tr>
                                                    {data.footer_text.map(function (footer_text, index) {
                                                        return (
                                                            <>
                                                                <tr key={index}>
                                                                    <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>
                                                                        {footer_text.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                            return (
                                                                                <CommonText commonTxt={commonTxt} />
                                                                            )
                                                                        })}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </td>
                                        <td width="10" style={{ "backgroundColor": "#fff" }}>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                }</>
        )
    }
}

export default FasenraFooter;