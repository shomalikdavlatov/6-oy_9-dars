import React from "react";

export function Text({ name, textColor, bgColor, fontSize }) {
    return (
        <span
            style={{color: textColor, backgroundColor: bgColor, fontSize: fontSize}}
            className={`font-medium rounded-[7px] px-[7px] py-[4px] leading-[100%]`}
        >
            {name}
        </span>
    );
}
