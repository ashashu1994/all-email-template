import React from 'react';
import CommonText from '../../_common/custom_text';
class ListComponent extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="25">&nbsp;</td>
                            <td>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td height="20"
                                            style={{ background: "#fff", lineHeight: "20px", verticalAlign: "top", height: "20px", fontSize: "1px" }}>&nbsp;
                                        </td>
                                    </tr>
                                    {data.heading && <>
                                        <tr>
                                            <td
                                                style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "15px" }}>
                                                {data.heading.map(function (commonTxt, commonTxtIndex) {
                                                    return (
                                                        <React.Fragment key={commonTxtIndex}>
                                                            <CommonText commonTxt={commonTxt} />
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="10"
                                                style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "10px", fontSize: "1px" }}>&nbsp;
                                        </td>
                                        </tr>
                                    </>}
                                    {data.sub_heading && <>
                                        <tr>
                                            <td height="13"
                                                style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "12px" }}>
                                                {data.sub_heading.map(function (commonTxt, commonTxtIndex) {
                                                    return (
                                                        <React.Fragment key={commonTxtIndex}>
                                                            <CommonText commonTxt={commonTxt} />
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </td>
                                        </tr>
                                    </>
                                    }
                                    {data.list && <>
                                        <tr>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ lineHeight: "17px" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td height="3" style={{ background: "#fff", fontSize: "1px" }}></td>
                                                        </tr>
                                                        {data.list.map(function (list, listIndex) {
                                                            return (<>
                                                                <tr>
                                                                    <td width="12" height="10" valign="top"
                                                                        style={{ background: "#fff", color: "#000", textAlign: "justify", fontSize: "15px", verticalAlign: "5px" }}>
                                                                        •</td>
                                                                    <td height="20" style={{ background: "#fff", color: "#000", textAlign: "left", fontSize: "12px" }}>
                                                                        {list.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                            return (
                                                                                <React.Fragment key={commonTxtIndex}>
                                                                                    <CommonText commonTxt={commonTxt} />
                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="3" style={{ background: "#fff", fontSize: "1px" }}></td>
                                                                </tr> </>
                                                            )
                                                        })}

                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </>}
                                    <tr>
                                        <td height="20"
                                            style={{ background: "#fff", lineHeight: "20px", verticalAlign: "top", height: "20px", fontSize: "1px" }}>&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                            <td width="25">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
}

export default ListComponent;