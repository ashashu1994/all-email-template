import React from 'react';
import data from "../data/symbicort-template2";
import Header from './_components/header';
import Banner from './_components/banner';
import Section10 from './_components/section10';
import TextSection from './_components/text_section';
import Section15 from './_components/section15';
import Section20 from './_components/section20';
import ImgLessWidth from './_components/img_less_width';
import Section25 from './_components/section25';
import CTAButton from './_components/cta-button';
import BlueLinks from './_components/blue-links';
import Footer from './_components/footer';
class SymbicortTemp2 extends React.Component {
    render() {
        return (
            <table id="main_table" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ border: "1px solid #343434", backgroundColor: "#fff", color: "#000", textAlign: "justify", verticalAlign: "top", margin: "0 auto" }} align="center">
                <tbody>
                    <tr>
                        <td height="5" style={{ background: "#FF0000", lineHeight: "5px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table id="main_table1" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#fff", color: "#000", textAlign: "justify", verticalAlign: "top", margin: "0 auto" }} align="center">
                                <tbody>
                                    {data.content && data.content.map(function (content, contentIndex) {
                                        return (
                                            <React.Fragment key={contentIndex}>
                                                {content.preheader_text && content.title && content.click_text &&
                                                    <Header content={content} />
                                                }
                                                {content.hero_img &&
                                                    <Banner content={content} />
                                                }
                                                {content.section10 &&
                                                    <Section10 content={content} />
                                                }
                                                {content.text_section &&
                                                    <TextSection content={content} />
                                                }
                                                {content.section15 &&
                                                    <Section15 content={content} />
                                                }
                                                {content.img_less_width &&
                                                    <ImgLessWidth content={content} />
                                                }
                                                {content.section20 &&
                                                    <Section20 content={content} />
                                                }
                                                {content.section25 && <>
                                                    <Section25 content={content} />
                                                </>
                                                }
                                                {content.cta_button &&
                                                    <CTAButton content={content} />
                                                }
                                                {content.blue_links &&
                                                    <BlueLinks data={content} />
                                                }
                                                {(content.footer_text || content.copyright_logo) &&
                                                    <Footer content={content} />
                                                }
                                            </React.Fragment>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default SymbicortTemp2;