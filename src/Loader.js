// src/Loader.js
import React from 'react';
import { Rings } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Rings color="#00BFFF" height={80} width={80} />
        </div>
    );
};

export default Loader;
