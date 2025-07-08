import React from 'react';

export function Button({name, classes=""}) {
    return (
        <button className={`py-5 px-[35px] rounded-[14px] text-[1.25rem] ${classes}`}>
            {name}
        </button>
    );
}