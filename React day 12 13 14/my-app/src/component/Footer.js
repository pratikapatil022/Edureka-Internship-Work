import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <center>
                <h4>&copy; Pratik {props.month} {props.year}</h4>
            </center>
        </div>
    )
}

export default Footer;