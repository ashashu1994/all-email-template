import React from 'react';
class FasenraBlueLinks extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td width="100%" bgcolor="#4472c4">
                                    <table width="50%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#4472c4" style={{ "float": "left", "textAlign": "left" }} align="left">
                                        <tbody>
                                            <tr>
                                                <td width="1%">&nbsp;</td>
                                                <td width="48%">&nbsp;</td>
                                            </tr>
                                            {data.blue_links_left.map(function (list, index) {
                                                return (
                                                    <tr key={index}>
                                                        <td width="2%"></td>
                                                        <td width="48%" height="20" style={{ "color": "#fff", "fontSize": "12px" }}><span className="font-size-mob-9"> <a rel="noopener noreferrer" target="_blank" href={list.link}><font color="#fff"><u style={{ "color": "#fff", "cursor": "pointer" }}>{list.name}</u></font></a></span></td>
                                                    </tr>
                                                )
                                            })}
                                            <tr>
                                                <td width="1%">&nbsp;</td>
                                                <td width="48%">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table width="2" border="0" cellSpacing="0" cellPadding="0" bgcolor="#4472c4" style={{ "float": "left", "textAlign": "left" }} align="left">
                                        <tbody>
                                            <tr>
                                                <td width="1%" height="10"></td>
                                            </tr>
                                            <tr>
                                                <td width="2" height="70" style={{ "lineHeight": "15px", "verticalAlign": "top", "textAlign": "center", "backgroundColor": "#fff" }}></td>
                                            </tr>
                                            <tr>
                                                <td width="1%" height="5"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table width="46%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#4472c4" style={{ "float": "left", "textAlign": "left" }} align="right">
                                        <tbody>
                                            <tr>
                                                <td width="23%" className="widthtd"></td>
                                                <td width="23%" height="13" className="heighttd"></td>
                                            </tr>
                                            {data.blue_links_right.map(function (list, index) {
                                                return (
                                                    <tr key={index}>
                                                        <td width="23%" className="widthtd"></td>
                                                        <td width="23%" height="20" style={{ "color": "#fff", "fontSize": "12px" }}><span className="font-size-mob-9"><a rel="noopener noreferrer" target="_blank" href={list.link}><font color="#fff"><u style={{ "color": "#fff", "cursor": "pointer" }}>{list.name}</u></font></a></span></td>
                                                    </tr>
                                                )
                                            })}
                                            <tr>
                                                <td width="10"></td>
                                                <td width="10" height="3"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default FasenraBlueLinks;