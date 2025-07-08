import React from 'react';

export function Text({name, textColor, bgColor, fontSize}) {
    return <span className={`text-[${textColor}] bg-[${bgColor}] ${fontSize} font-medium rounded-[7px] px-[7px]`}>{name}</span>;
}