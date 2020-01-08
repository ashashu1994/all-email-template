import React from 'react';
import './forxiga-temp1.css';
import ForxigaTemplate1Header from './template1/header';
import ForxigaTemplate1Banner from './template1/banner';
import SectionCTA from './template1/sectionCTA';
import Section4 from './template1/section4';
import Section567 from './template1/section567';
import Section8 from './template1/section8';
import Section9 from './template1/section9';
import Section10 from './template1/section10';
import RefSection from './template1/RefSection';
import Footer from './template1/footer';
class ForxigaTemplate1 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div style={{ "width": "100%", "border": "0px", "padding": "0px", "margin": "0px" }}>
                <table id="main_table" width="598" border="0" cellpadding="0" cellspacing="0" style={{ "border": "1px solid #343434", "color": "#000", "textAlign": "left", "verticalAlign": "top", "margin": "0 auto" }} align="center">
                    <tr>
                        <td>
                            <table id="main_table1" width="598" border="0" cellpadding="0" cellspacing="0" style={{ color: "#000", textAlign: "left", verticalAlign: "top", margin: "0 auto" }} align="center">
                                {data.content && data.content.map(function (content, contentIndex) {
                                    return (
                                        <>
                                            {content.preheader_text &&
                                                <ForxigaTemplate1Header data={content} />
                                            }
                                            {content.hero_img &&
                                                <ForxigaTemplate1Banner data={content} />
                                            }
                                            {content.grid_cta &&
                                                <SectionCTA data={content} />
                                            }
                                            {content.section4 &&
                                                <Section4 data={content} />
                                            }
                                            {content.section567 && content.section567.map(function (section567, section567Index) {
                                                return (
                                                    <Section567 data={section567} />
                                                )
                                            })}
                                            {content.section8 && content.section8.map(function (section8, section8Index) {
                                                return (
                                                    <Section8 data={section8} />
                                                )
                                            })}
                                            {content.section9 && content.section9.map(function (section9, section9Index) {
                                                return (
                                                    <Section9 data={section9} />
                                                )
                                            })}
                                            {content.section10 && content.section10.map(function (section10, section9Index) {
                                                return (
                                                    <Section10 data={section10} />
                                                )
                                            })}
                                            {content.refSection && content.refSection.map(function (refSection, refSectionIndex) {
                                                return (
                                                    <RefSection data={refSection} />
                                                )
                                            })}
                                            {(content.footer_text || content.footer_logo) &&
                                                <Footer data={content} />
                                            }
                                        </>
                                    )
                                })}
                            </table>
                        </td>
                    </tr>
                </table>
            </div >
        )
    }
}

export default ForxigaTemplate1;