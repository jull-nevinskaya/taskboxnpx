import React from 'react';

const Footer = ({ color, text }) => {
    const style = {
        backgroundColor: color === 'black' ? '#000000' : '#808080',
        color: 'white',
        padding: '1rem',
        textAlign: 'left',
    };

    return (
        <footer style={style}>
            {text}
        </footer>
    );
};

export default Footer;

