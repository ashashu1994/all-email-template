import React from 'react';
import data from "../data/lynparza-template3";
import Header from './_components/header';
import RespBanner from './_components/resp-banner';
import Banner from './_components/banner';
import Paragraph from './_components/paragraph';
import Section10 from './_components/section10';
import BlueLinks from './_components/blue-links';
import Footer from './_components/footer';
class LynparzaTemp3 extends React.Component {
    render() {
        return (
            <table id="main_table" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ border: "1px solid #343434", backgroundColor: "#fff", color: "#000", textAlign: "justify", verticalAlign: "top", margin: "0 auto" }} align="center">
                <tbody>
                    <tr>
                        <td>
                            <table id="main_table1" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#fff", color: "#000", textAlign: "justify", verticalAlign: "top", margin: "0 auto" }} align="center">
                                <tbody>
                                    <tr>
                                        <td height="20" style={{ background: "#004d74", lineHeight: "20px", verticalAlign: "top", height: "10px", fontSize: "1px" }}>&nbsp;</td>
                                    </tr>
                                    {data.content.map(function (content, contentIndex) {
                                        return (
                                            <React.Fragment key={contentIndex}>
                                                {(content.preheader_text && content.title && content.click_text) && <>
                                                    <Header content={content} />
                                                </>}
                                                {content.hero_img &&
                                                    <>
                                                        {content.hero_img.desktop_img && content.hero_img.mob_img ?
                                                            <RespBanner content={content} />
                                                            :
                                                            <Banner content={content} />
                                                        }
                                                    </>
                                                }
                                                {content.text_section &&
                                                    <Paragraph content={content} />
                                                }
                                                {content.section10 && content.section10.map(function (section10, section10Index) {
                                                    return (
                                                        <React.Fragment key={section10Index}>
                                                            <Section10 content={section10} />
                                                        </React.Fragment>
                                                    )
                                                })}
                                                {content.full_cta && <>
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
                                                                                        <td height="13" style={{ background: "#fff", lineHeight: "18px", verticalAlign: "top", height: "8px", textAlign: "center" }}><a target="_blank" rel="noopener noreferrer" href={content.full_cta_link && content.full_cta_link}><img src={`lynparza_images/${content.full_cta}`} alt="" style={{ cursor: "pointer" }} /></a></td>
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
                                                        <td height="20" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "20px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                                }
                                                {content.blue_links && <>
                                                    <BlueLinks data={content} />
                                                    <tr>
                                                        <td height="20" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "20px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                                }
                                                {content.footer && <>
                                                    <Footer content={content} />
                                                </>
                                                }
                                            </React.Fragment>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody >
            </table >
        )
    }
}

export default LynparzaTemp3;