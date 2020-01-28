import React from 'react';
import CommonText from '../../_common/custom_text';
class Paragraph extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td width="10">&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            {content.text_section.map(function (text_section, text_sectionIndex) {
                                                return (
                                                    <React.Fragment key={text_sectionIndex}>
                                                        {text_section.title && <>
                                                            <tr>
                                                                <td height="13" style={{ background: "#fff", lineHeight: "18px", verticalAlign: "top", height: "8px", color: "#004d74", fontSize: "20px" }}><b style={{ color: "#004d74" }}>
                                                                    {text_section.title.map(function (commonTxt, commonTxtIndex) {
                                                                        return (
                                                                            <React.Fragment key={commonTxtIndex}>
                                                                                <CommonText commonTxt={commonTxt} />
                                                                            </React.Fragment>
                                                                        )
                                                                    })}
                                                                </b> </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="13" style={{ background: "#fff", lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </>
                                                        }
                                                        {text_section.sub_title && <>
                                                            <tr>
                                                                <td height="13" style={{ background: "#fff", lineHeight: "18px", verticalAlign: "top", height: "8px", color: "#004d74", fontSize: "16px" }}><b style={{ color: "#004d74" }}>
                                                                    {text_section.sub_title.map(function (commonTxt, commonTxtIndex) {
                                                                        return (
                                                                            <React.Fragment key={commonTxtIndex}>
                                                                                <CommonText commonTxt={commonTxt} />
                                                                            </React.Fragment>
                                                                        )
                                                                    })}
                                                                </b> </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="2" style={{ background: "#fff", lineHeight: "2px", verticalAlign: "top", height: "2px", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </>
                                                        }
                                                        {text_section.paragraph && text_section.paragraph.map(function (paragraph, paragraphIndex) {
                                                            return (
                                                                <React.Fragment key={paragraphIndex}>
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "12px" }}>{paragraph.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                            return (
                                                                                <React.Fragment key={commonTxtIndex}>
                                                                                    <CommonText commonTxt={commonTxt} />
                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="10" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                        {text_section.bullet_list && <>
                                                            <tr>
                                                                <td width="100%">
                                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ lineHeight: "14px" }}>
                                                                                        <tbody>
                                                                                            {text_section.bullet_list.map(function (bullet_list, bullet_listIndex) {
                                                                                                return (
                                                                                                    <React.Fragment key={bullet_listIndex}>
                                                                                                        <tr>
                                                                                                            <td height="5" style={{ background: "#fff", fontSize: "1px" }}></td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td width="10" height="10" align="top" style={{ background: "#fff", color: "#000", textAlign: "justify", fontSize: "12px", verticalAlign: "top" }}>•</td>
                                                                                                            <td height="13" style={{ background: "#fff", color: "#000", textAlign: "left", fontSize: "12px" }}>
                                                                                                                {bullet_list.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                                    return (
                                                                                                                        <React.Fragment key={commonTxtIndex}>
                                                                                                                            <CommonText commonTxt={commonTxt} />
                                                                                                                        </React.Fragment>
                                                                                                                    )
                                                                                                                })}
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })
                                                                                            }
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="10" style={{ background: "#fff", fontSize: "1px" }}></td>
                                                            </tr>
                                                        </>
                                                        }
                                                        {text_section.small_paragraph && text_section.small_paragraph.map(function (small_paragraph, small_paragraphIndex) {
                                                            return (
                                                                <React.Fragment key={small_paragraphIndex}>
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#fff", lineHeight: "12px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "10px" }}>
                                                                            {small_paragraph.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                return (
                                                                                    <React.Fragment key={commonTxtIndex}>
                                                                                        <CommonText commonTxt={commonTxt} />
                                                                                    </React.Fragment>
                                                                                )
                                                                            })}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="10" style={{ background: "#fff", fontSize: "1px" }}></td>
                                                                    </tr>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </React.Fragment>
                                                )
                                            })}
                                            <tr>
                                                <td height="10" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width="10">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default Paragraph;