import React from "react";
import logo from '../assets/argentBankLogo.png'
import '../styles/main.css'

export default function Banner() {
    return (
        <section>
            <img src={logo} alt='' />
        </section>
    );
}