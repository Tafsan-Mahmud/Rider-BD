import React from 'react';
import imgMap from '../GoToRide/Map.png';
import './Strcture.css';

const Strcture = () => {
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
               <img src={imgMap} alt=""/>
                </div>
            </section>
        </div>
    );
};

export default Strcture;