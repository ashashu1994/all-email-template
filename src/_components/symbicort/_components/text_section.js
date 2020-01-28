import React from 'react';
import CommonText from '../../_common/custom_text';
class TextSection extends React.Component {
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
                                                        {text_section.heading &&
                                                            <>
                                                                <tr>
                                                                    <td height="13" style={{ background: "#ffffff", lineHeight: "13px", verticalAlign: "top", height: "8px", color: "#FF0000", fontSize: "15px" }}><b style={{ color: "#FF0000" }}>{text_section.heading}</b></td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="5" style={{ background: "#fff", lineHeight: "5px", verticalAlign: "top", height: "5px", fontSize: "1px" }}>&nbsp;</td>
                                                                </tr>
                                                            </>
                                                        }
                                                        {text_section.name && <>
                                                            <tr>
                                                                <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", color: "#000", fontSize: "12px" }}>
                                                                    {text_section.name.map(function (name, nameIndex) {
                                                                        return (
                                                                            <React.Fragment key={nameIndex}>
                                                                                <CommonText commonTxt={name} />
                                                                            </React.Fragment>
                                                                        )
                                                                    })}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </>}
                                                        {text_section.paragraph && text_section.paragraph.map(function (paragraph, paragraphIndex) {
                                                            return (
                                                                <React.Fragment key={paragraphIndex}>
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "12px" }}>
                                                                            {paragraph.multiline.map(function (multiline, multilineIndex) {
                                                                                return (
                                                                                    <React.Fragment key={multilineIndex}>
                                                                                        <CommonText commonTxt={multiline} />
                                                                                    </React.Fragment>
                                                                                )
                                                                            })}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                        {text_section.small_paragraph && text_section.small_paragraph.map(function (paragraph, paragraphIndex) {
                                                            return (
                                                                <React.Fragment key={paragraphIndex}>
                                                                    <tr>
                                                                        <td height="11" style={{ background: "#fff", lineHeight: "12px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "10px" }}>
                                                                            {paragraph.multiline.map(function (multiline, multilineIndex) {
                                                                                return (
                                                                                    <React.Fragment key={multilineIndex}>
                                                                                        <CommonText commonTxt={multiline} />
                                                                                    </React.Fragment>
                                                                                )
                                                                            })}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="8" style={{ background: "#fff", lineHeight: "8px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                        {text_section.bullet_list && text_section.bullet_list.map(function (bullet_list, bullet_listIndex) {
                                                            return (
                                                                <React.Fragment key={bullet_listIndex}>
                                                                    <tr>
                                                                        <td>
                                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ lineHeight: "14px" }}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="11" height="10" align="top" valign="top" style={{ background: "#fff", color: "#FF0f00", textAlign: "left", fontSize: "13px" }}>•</td>
                                                                                        <td height="13" style={{ background: "#fff", color: "#000", textAlign: "left", fontSize: "12px", lineHeight: "15px" }}>
                                                                                            {bullet_list.multiline.map(function (multiline, multilineIndex) {
                                                                                                return (
                                                                                                    <React.Fragment key={multilineIndex}>
                                                                                                        <CommonText commonTxt={multiline} />
                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })}
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height="8" style={{ background: "#fff", fontSize: "1px", lineHeight: "8px" }}></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                        <tr>
                                                            <td height="7" style={{ background: "#fff", fontSize: "1px", lineHeight: "7px" }}></td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })}
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

export default TextSection;