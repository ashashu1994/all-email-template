import React from 'react';
class CommonText extends React.Component {
    render() {
        const { commonTxt, aColor, supFS } = this.props;
        return (
            <>
                {/* if sup tag */}
                {(commonTxt.includes("<sup>")) ?
                    <sup style={{ fontSize: `${supFS ? supFS : "7px"}`, lineHeight: "0px", color: "inherit" }}>{commonTxt.replace('<sup>', '')}</sup> :
                    // if sub tag
                    (commonTxt.includes("<sub>")) ?
                        <sub style={{ fontSize: `${supFS ? supFS : "7px"}`, lineHeight: "0px", color: "inherit" }}>{commonTxt.replace('<sub>', '')}</sub> :
                        // if bold tag
                        (commonTxt.includes("<b>")) ?
                            <b>{commonTxt.replace('<b>', '')}</b> :
                            // if italic tag
                            (commonTxt.includes("<i>")) ?
                                <i>{commonTxt.replace('<i>', '')}</i> :
                                // if anchor tag
                                (commonTxt.includes("<a>")) ?
                                    <a href={commonTxt.substring(
                                        commonTxt.indexOf("<a>") + 3,
                                        commonTxt.indexOf("</a>")) === "" ?
                                        "#" :
                                        commonTxt.substring(
                                            commonTxt.indexOf("<a>") + 3,
                                            commonTxt.indexOf("</a>"))
                                    } style={{ color: `${aColor}` }}><span style={{ color: `${aColor}` }}>{commonTxt.replace(commonTxt.substring(
                                        commonTxt.indexOf("<a>"),
                                        commonTxt.indexOf("</a>") + 4), '')}</span></a> :
                                    // if span for color
                                    (commonTxt.includes("<span>")) ?
                                        <span style={{
                                            color: `${
                                                commonTxt.substring(
                                                    commonTxt.indexOf("<span>") + 6,
                                                    commonTxt.indexOf("</span>")) === "" ?
                                                    "inherit" :
                                                    commonTxt.substring(
                                                        commonTxt.indexOf("<span>") + 6,
                                                        commonTxt.indexOf("</span>"))
                                                }`
                                        }}>
                                            {commonTxt.replace(commonTxt.substring(
                                                commonTxt.indexOf("<span>"),
                                                commonTxt.indexOf("</span>") + 7), '')}
                                        </span> :
                                        // if nothing, print as it is
                                        commonTxt
                }
            </>
        )

    }
}

export default CommonText;