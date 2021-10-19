import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SingleService from '../Service/SingleService';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <SingleService></SingleService>
            <Footer></Footer>
        </div>
    );
};

export default Home;