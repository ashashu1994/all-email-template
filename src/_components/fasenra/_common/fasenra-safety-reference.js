import React from 'react';
import CommonText from '../../_common/custom_text';
class FasenraSafetyReference extends React.Component {
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
                                            {data.safety && data.safety.map(function (safety, index) {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <tr key={index}>
                                                            <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>
                                                                {safety.safety_info.map(function (commonTxt, commonTxtIndex) {
                                                                    return (
                                                                        <React.Fragment key={commonTxtIndex}>
                                                                            <CommonText commonTxt={commonTxt} />
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px", "textAlign": "justify" }}>{safety.safety_desc.map(function (commonTxt, commonTxtIndex) {
                                                                return (
                                                                    <React.Fragment key={commonTxtIndex}>
                                                                        <CommonText commonTxt={commonTxt} />
                                                                    </React.Fragment>
                                                                )
                                                            })}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "fontSize": "1px", "height": "8px" }}>&nbsp;</td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })}
                                            {data.reference_title && <>
                                                <tr>
                                                    <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>
                                                        {data.reference_title.map(function (commonTxt, commonTxtIndex) {
                                                            return (
                                                                <React.Fragment key={commonTxtIndex}>
                                                                    <CommonText commonTxt={commonTxt} />
                                                                </React.Fragment>
                                                            )
                                                        })}</td>
                                                </tr>
                                                <tr>
                                                    <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {data.reference_list && <>
                                                {data.reference_list.map(function (text, index) {
                                                    return (
                                                        <tr key={index}>
                                                            <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>
                                                                {text.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                    return (
                                                                        <React.Fragment key={commonTxtIndex}>
                                                                            <CommonText commonTxt={commonTxt} />
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                <tr>
                                                    <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
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

export default FasenraSafetyReference;