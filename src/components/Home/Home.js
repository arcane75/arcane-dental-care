import React from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SingleService from '../Service/SingleService';
import ServiceHome from '../Services/ServiceHome';
import Subscription from '../Subscribe/Subscription';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="container my-3">
                <div className="row serviceinfo">

                    <div className="service-text col ">
                        <h2> Committed To</h2>
                        <h1>Excellence </h1>
                    </div>
                    <div className="col my-auto">

                        <Button className="btn-lg btn btn-warning mx-auto"> All Services</Button>
                    </div>

                </div>

            </div>
            <ServiceHome></ServiceHome>
            <Subscription></Subscription>
            <Footer></Footer>
        </div>
    );
};

export default Home;