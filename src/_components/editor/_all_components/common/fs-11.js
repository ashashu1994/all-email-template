import React from 'react';
import CommonText from './custom_text';
class FS11 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <td height="15" style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: "14px", color: `${data.textColor ? data.textColor : "#000"}`, verticalAlign: "top", height: "8px", textAlign: "left", fontSize: "11px" }}>
                {data.text.map(function (text, textIndex) {
                    return (
                        <React.Fragment key={textIndex}>
                            <CommonText commonTxt={text} supFS={"7px"} aColor={data.textColor ? data.textColor : "#000"} />
                        </React.Fragment>
                    )
                })}
            </td>
        )

    }
}

export default FS11;