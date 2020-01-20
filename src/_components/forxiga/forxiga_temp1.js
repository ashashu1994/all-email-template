import React from 'react';
import data from "../data/forxiga-template1";
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
        return (
            <div style={{ "width": "100%", "border": "0px", "padding": "0px", "margin": "0px" }}>
                <table id="main_table" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ "border": "1px solid #343434", "color": "#000", "textAlign": "left", "verticalAlign": "top", "margin": "0 auto" }} align="center">
                    <tbody>
                        <tr>
                            <td>
                                <table id="main_table1" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ color: "#000", textAlign: "left", verticalAlign: "top", margin: "0 auto" }} align="center">
                                    <tbody>
                                        {data.content && data.content.map(function (content, contentIndex) {
                                            return (
                                                <React.Fragment key={contentIndex}>
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
                                                            <React.Fragment key={section567Index}>
                                                                <Section567 data={section567} />
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                    {content.section8 && content.section8.map(function (section8, section8Index) {
                                                        return (
                                                            <React.Fragment key={section8Index}>
                                                                <Section8 data={section8} />
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                    {content.section9 && content.section9.map(function (section9, section9Index) {
                                                        return (
                                                            <React.Fragment key={section9Index}>
                                                                <Section9 data={section9} />
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                    {content.section10 && content.section10.map(function (section10, section10Index) {
                                                        return (
                                                            <React.Fragment key={section10Index}>
                                                                <Section10 data={section10} />
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                    {content.refSection && content.refSection.map(function (refSection, refSectionIndex) {
                                                        return (
                                                            <React.Fragment key={refSectionIndex}>
                                                                <RefSection data={refSection} />
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                    {(content.footer_text || content.footer_logo) &&
                                                        <Footer data={content} />
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
            </div >
        )
    }
}

export default ForxigaTemplate1;