import React from 'react';
class CTAButton extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                <tr>
                    <td width="100%">
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                            <tbody>
                                <tr>
                                    <td width="1%">&nbsp;</td>
                                    <td width="100%">
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                            <tbody>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "12px", verticalAlign: "top", height: "8px", textAlign: "center" }}><a rel="noopener noreferrer" target="_blank" href={content.cta_button_link && content.cta_button_link}><img src={`symbicort_images/${content.cta_button}`} alt="" style={{ cursor: "pointer" }} /></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width="1%">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="25" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "25px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default CTAButton;