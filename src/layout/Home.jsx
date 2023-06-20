import React from 'react';
import Navbar from '../Componenets/Navbar';
import CareNeedBanner from '../Componenets/CareNeedBanner';
import SickKid from '../Componenets/SickKid';
import Schedule from '../Componenets/Schedule';
import MedicalCare from '../Componenets/MedicalCare';
import Banner from '../Componenets/Banner';
import Experts from '../Componenets/Experts';
import Feedback from '../Componenets/Feedback';
import Events from '../Componenets/Events';

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
            <Feedback></Feedback>
            <Events></Events>
        </div>
    );
};

export default Home;