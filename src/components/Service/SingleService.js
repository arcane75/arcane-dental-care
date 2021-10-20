import React from 'react';
import { Button } from 'react-bootstrap';
import './SingleService.css';

const SingleService = (props) => {
    const { name, img, description } = props.service || {};

    // Fetch Not Work, That's why i'm set data manually. I was took support from support session, but they didnot found any issue not to get data from fetch.

    return (
        <>
            <div className="container my-3">
                <div className="row">

                    <div className="service-text col ">
                        <h2> Committed To</h2>
                        <h1>Excellence </h1>
                    </div>
                    <div className="col my-auto">

                        <Button className="btn-lg btn btn-warning mx-auto"> All Services</Button>
                    </div>

                </div>

            </div>

            <div className="homeService my-5">

                <div className="my-3">
                    <img className="img-fluid" src="https://i.ibb.co/mSnPq7z/home-service-1.png" alt=" " />
                    <h2>Dental Fillings</h2>
                    <p>To treat a cavity your dentist will remove the decayed portion of the tooth and then "fill" the area on the tooth where the decayed material once lived. Fillings are also used to repair cracked or broken teeth and teeth that have been worn down from misuse</p>
                    <Button className="btn-md btn btn-warning">Explore item</Button>
                </div>

                <div className="my-3">
                    <img className="img-fluid" src="https://i.ibb.co/WyjKyyg/home-service-2.png" alt=" " />
                    <h2>Root Canal Treatment</h2>
                    <p>Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth. Root canal treatment is not painful and can save a tooth that might otherwise have to be removed completely.</p>
                    <Button className="btn-md btn btn-warning">Explore item</Button>
                </div>

                <div className="my-3">
                    <img className="img-fluid" src="https://i.ibb.co/nP9p7hQ/home-service-3.png" alt=" " />
                    <h2>Tooth Extraction</h2>
                    <p>It will take roughly 1-2 weeks for your tooth extraction site to completely heal; however, if you notice any of the following symptoms or signs, be sure to contact our doctors as soon as possible: Fever. </p>
                    <Button className="btn-md btn btn-warning">Explore item</Button>
                </div>

                <div className="my-3">
                    <img className="img-fluid" src="https://i.ibb.co/jGNkJYF/home-service-4.png" alt=" " />
                    <h2>Dental Implants</h2>
                    <p>A dental implant is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown, bridge, denture, or facial prosthesis or to act as an orthodontic anchor.</p>
                    <Button className="btn-md btn btn-warning">Explore item</Button>
                </div>

                <div className="my-3">
                    <img className="img-fluid" src="https://i.ibb.co/jGNkJYF/home-service-4.png" alt=" " />
                    <h2>Teeth Braces</h2>
                    <p>Uniquely deploy cross-unit benefits with wireless testing procedures. Build full backward compatible relationships.</p>
                    <Button className="btn-md btn btn-warning">Explore item</Button>
                </div>

                <div className="my-3">
                    <img className="img-fluid" src="https://i.ibb.co/nP9p7hQ/home-service-3.png" alt=" " />
                    <h2>Dental Orthodontics</h2>
                    <p>Uniquely deploy cross-unit benefits with wireless testing procedures. Build full backward compatible relationships.</p>
                    <Button className="btn-md btn btn-warning">Explore item</Button>
                </div>

                <div className="my-3">
                    <img className="img-fluid" src="https://i.ibb.co/WyjKyyg/home-service-2.png" alt=" " />
                    <h2>Teeth Alignment</h2>
                    <p>Uniquely deploy cross-unit benefits with wireless testing procedures. Build full backward compatible relationships.</p>
                    <Button className="btn-md btn btn-warning">Explore item</Button>
                </div>

                <div className="my-3">
                    <img className="img-fluid" src="https://i.ibb.co/mSnPq7z/home-service-1.png" alt=" " />
                    <h2>Teeth Whitening</h2>
                    <p>Uniquely deploy cross-unit benefits with wireless testing procedures. Build full backward compatible relationships.</p>
                    <Button className="btn-md btn btn-warning">Explore item</Button>
                </div>

            </div>
        </>
    );
};

export default SingleService;