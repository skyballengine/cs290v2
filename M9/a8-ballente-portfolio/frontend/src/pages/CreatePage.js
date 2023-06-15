import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// TODO import necessary components and icons

export const CreatePage = () => {
    const [locationName, setName] = useState('');
    const [bedLength, setBedLength] = useState('');
    const [execDate, setDate] = useState('');

    const navigate = useNavigate();

    const addPlanting = async () => {
        const newPlanting = { locationName, bedLength, execDate };

        const response = await fetch('/log', {
                method: 'POST',
                body: JSON.stringify(newPlanting),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 201) {
                alert("Successfully added a new planting")
                console.log(response);
            } else {
                alert(`Unable to add new planting with status code of ${response.status}`)
            }
            navigate("/log");
    }
    return (
        <div className='log-page'>
            <h2>Log A New Planting</h2>
        {/* <article className="create-article"> */}
            <table id='plantings' className="log-table">
                <caption>
                Add a new planting to the database
                </caption>
                <tbody>
                    <tr>
                        <td>
                            <input 
                                type="text" 
                                value={locationName}
                                placeholder="Enter planting name"
                                onChange={e => setName(e.target.value)} 
                                required='true' 
                                autofocus
                                />
                            
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={bedLength} 
                                placeholder="Enter bed length"
                                onChange={e => setBedLength(e.target.value)} 
                                required='true' 
                                autofocus
                                />
                            
                        </td>
                        <td>
                            
                            <input 
                                type="date" 
                                value={execDate} 
                                placeholder="Enter date"
                                onChange={e => setDate(e.target.value)} 
                                required='true' 
                                autofocus
                                />
                            
                        </td>
                    </tr>
                </tbody>
                
                
            </table>
            <button className='edit-create-button' onClick={addPlanting}>Submit</button>
        {/* </article> */}
        </div>
    )
}

export default CreatePage;

