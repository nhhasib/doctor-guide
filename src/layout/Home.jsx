import React from 'react';
import Navbar from '../Componenets/Navbar';
import CareNeedBanner from '../Componenets/CareNeedBanner';
import SickKid from '../Componenets/SickKid';
import Schedule from '../Componenets/Schedule';
import MedicalCare from '../Componenets/MedicalCare';
import Banner from '../Componenets/Banner';
import Experts from '../Componenets/Experts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CareNeedBanner></CareNeedBanner>
            <SickKid></SickKid>
            <Schedule></Schedule>
            <MedicalCare></MedicalCare>
            <Banner></Banner>
            <Experts></Experts>
        </div>
    );
};

export default Home;