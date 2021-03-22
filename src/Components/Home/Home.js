import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Home.css';
import { Button, Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    const history = useHistory();
    const handlRide = () => {
        history.push('/GoToRide')
    }
    const [user, setUser] = useState([]);
    console.log(user)
    useEffect(() => {
        fetch(`https://api.mocki.io/v1/c8802d9b`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div className="background ">
            <div className="top">
                <div className=" d-flex justify-content-center top">
                    {
                        user.map(data =><Link to={'/ride/' + data.travelTo}><Card onClick={handlRide} style={{ width: '12rem' }} className="mb-2 gap ">
                            <Card.Header><h4><FontAwesomeIcon icon={faRoad} /> {data.name}{data.travelTo}</h4></Card.Header>
                            <Button onClick={handlRide} variant="contained" color="primary"> Book </Button>
                            <Card.Body>
                                <Card.Text>
                                    <img className="img-sizing" src={data.images} alt="" />
                                </Card.Text>
                            </Card.Body>
                        </Card></Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;