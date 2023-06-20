import React from 'react';

const Button = ({text}) => {
    return (
        <>
        <button className={`btn bg-[#FF8B42] uppercase px-6 text-[16px] text-white hover:bg-slate-800`}>{text}</button>
        </>
    );
};

export default Button;