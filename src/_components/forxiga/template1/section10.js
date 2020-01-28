import React from 'react';
class Section10 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {data.cta_btn_2 && <>
                    <tr style={{ backgroundColor: "#3b353f" }}>
                        <td width="100%" style={{ backgroundColor: "#3b353f" }}>
                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#3b353f" }}>
                                <tbody>
                                    <tr>
                                        <td width="1%" style={{ backgroundColor: "#3b353f" }}>&nbsp;</td>
                                        <td width="100%">
                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#3b353f" }}>
                                                <tbody>
                                                    <tr>
                                                        <td height="13" style={{ background: "#3b353f", lineHeight: "18px", verticalAlign: "top", height: "8px", textAlign: "center" }}><a rel="noopener noreferrer" target="_blank" href={data.cta_btn_2_link ? data.cta_btn_2_link : "#"}><img src={`forxiga_images/${data.cta_btn_2}`} alt="" style={{ cursor: "pointer" }} /></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td width="1%" style={{ backgroundColor: "#3b353f" }}>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr style={{ backgroundColor: "#3b353f" }}>
                        <td height="25" style={{ background: "#3b353f", fontSize: "1px", lineHeight: "25px" }}>&nbsp;</td>
                    </tr>
                </>}
            </>
        )
    }
}

export default Section10;