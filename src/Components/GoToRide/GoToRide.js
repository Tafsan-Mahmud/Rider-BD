import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './GoToRide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import imgMap from './Map.png';
import bike from './bike.png';


const GoToRide = (props ) => {
    const { id } = useParams();
    const [result, setResult] = useState(false)
    const [user, setUser] = useState([]);
    console.log(user)
    useEffect(() => {
        fetch(`https://api.mocki.io/v1/c8802d9b`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const findVechicle = user
    console.log(findVechicle);
    return (
        <div>
            <section>
                <div className="choice-section">
                    {result === false && <form onSubmit={(e) =>{ setResult(!result)} } className="full-form">
                        <p className="lable">Pick From</p>
                        <input name="from" placeholder="select curent location" type="text" required />
                        <br />
                        <p className="lable">Pick To</p>
                        <input name="from" placeholder="select where you go" type="text" required />
                        <input type="submit" value="Search" />
                    </form>}
                    {result === true && <div className="result-div">
                        <div className="sizing">
                            <div className="result1-name">
                                <h3>Mirpur 1</h3>
                                <h4>to</h4> 
                                <h3>Dhanmondi</h3>
                            </div>
                            <div className="result">
                                <img src={bike} alt="" />
                                <h5>bus  <FontAwesomeIcon icon={faUserFriends} /></h5>
                                <h5>$120</h5>
                            </div>
                            <div className="result">
                                <img src={bike} alt="" />
                                <h5>bus  <FontAwesomeIcon icon={faUserFriends} /></h5>
                                <h5>$120</h5>
                            </div>
                            <div className="result">
                                <img src={bike} alt="" />
                                <h5>bus  <FontAwesomeIcon icon={faUserFriends} /></h5>
                                <h5>$120</h5>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="map-section">
                    <img src={imgMap} alt="" />
                </div>
            </section>
        </div>
    );
};

export default GoToRide;