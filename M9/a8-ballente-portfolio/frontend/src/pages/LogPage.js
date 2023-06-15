import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogTable from '../components/LogTable.js'
import { Link } from 'react-router-dom';
import { IoMdCreate } from 'react-icons/io';


function LogPage({setPlantingToEdit}) {
    
    const [plantings, setPlantings] = useState([])
    const navigate = useNavigate();

    const onDelete = async(_id) => {
        const response = await fetch(`/log/${_id}`, {method: 'DELETE'})
        if (response.status === 204) {
            const newPlantings = plantings.filter(planting => planting._id !== _id)
            setPlantings(newPlantings);
        } else{
            alert('Delete failed');
            console.error(`Failed to delete planting with _id: ${_id}, status code received: ${response.status}`)
        }
    }

    const onEdit = planting => {
        setPlantingToEdit(planting);
        navigate('/edit-planting');

    }

    const loadPlantings = async () => {
        const response = await fetch('/log');
        const data = await response.json();
        setPlantings(data);
    }

    useEffect(() => {
        loadPlantings();
    }, []);
    
    return (
        <div className='log-page'>
            <h2>Plantings</h2>
            <article>
                <p>Retrieve, Create, and Edit Plantings</p>
                <LogTable plantings={plantings} onDelete={onDelete} onEdit={onEdit} />
                <Link to="/add-planting"><button><IoMdCreate />Create A Planting</button></Link>
            </article>
        </div>
    )
}

export default LogPage;