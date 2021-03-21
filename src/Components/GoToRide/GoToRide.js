import React from 'react';
import './GoToRide.css';
import imgMap from './Map.png';


const GoToRide = () => {
    return (
        <div>
            <section>
                <div className="choice-section">
                    <form className="full-form">
                        <p className="lable">Pick From</p>
                        <input name="from" placeholder="select curent location" type="text" required />
                        <br />
                        <p className="lable">Pick To</p>
                        <input name="from" placeholder="select where you go" type="text" required />
                        <input type="submit" value="Search" />
                    </form>
                </div>
                <div className="map-section">
               
                </div>
            </section>
        </div>
    );
};

export default GoToRide;