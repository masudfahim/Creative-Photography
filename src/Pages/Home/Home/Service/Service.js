import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/chackout/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100 ' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-info new-1'>Buy Now: {name}</button>
        </div>
    );
};

export default Service;