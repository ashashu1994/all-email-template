import React from 'react';
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
                                            {data.safety.map(function (safety, index) {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>{safety.safety_info}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px", "textAlign": "justify" }}>{safety.safety_desc}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "fontSize": "1px", "height": "8px" }}>&nbsp;</td>
                                                        </tr>
                                                    </>
                                                )
                                            })}
                                            <tr>
                                                <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>{data.reference_title}</td>
                                            </tr>
                                            <tr>
                                                <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                            </tr>
                                            {data.reference_list.map(function (name, index) {
                                                return (
                                                    <tr key={index}>
                                                        <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>{name}</td>
                                                    </tr>
                                                )
                                            })}
                                            <tr>
                                                <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td height="15" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "fontSize": "1px" }}>&nbsp;</td>
                                            </tr>
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