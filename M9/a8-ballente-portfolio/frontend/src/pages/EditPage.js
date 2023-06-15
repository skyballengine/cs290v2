
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditPage = ({ plantingToEdit }) => {
    const [locationName, setName] = useState(plantingToEdit.locationName);
    const [bedLength, setBedLength] = useState(plantingToEdit.bedLength);
    const [execDate, setDate] = useState(plantingToEdit.execDate);

    const navigate = useNavigate();

    const editPlanting = async () => {
        const editedPlanting = { locationName, bedLength, execDate };

        const response = await fetch(`/log/${plantingToEdit._id}`, {
                method: 'PUT',
                body: JSON.stringify(editedPlanting),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                alert("Successfully edited planting")
                console.log(response);
            } else {
                alert(`Unable to edit planting with status code of ${response.status}`)
            }
            navigate("/log");
        }
        return (
            <div className='log-page'>
            <h2>Edit Planting</h2>
            {/* <article className="create-article"> */}
                <table>
                    <caption>
                    Edit a planting in the database
                    </caption>
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    type="text" 
                                    value={locationName}
                                    onChange={e => setName(e.target.value)} 
                                    required='true' 
                                    autofocus
                                    />
                                
                            </td>
                            <td>
                                <input 
                                    type="number" 
                                    value={bedLength}
                                    onChange={e => setBedLength(e.target.value)} 
                                    required='true' 
                                    autofocus
                                    />
                                
                            </td>
                            <td>
                                
                                <input 
                                    type="date" 
                                    value={execDate}
                                    onChange={e => setDate(e.target.value)} 
                                    required='true' 
                                    autofocus
                                    />
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={editPlanting}>Save Changes</button>
            {/* </article> */}
            </div>
        )
    }
//     const [name, setName] = useState(planting.locationName);
//     const [bedLength, setBedLength] = useState(planting.bedLength);
//     const [date, setDate] = useState(planting.execDate.slice(0, 10));

//     const navigate = useNavigate();

//     const editPlanting = async() => {

//         const response = await fetch(`/log/${planting._id}`, {
//             method: 'PUT',
//             body: JSON.stringify({
//                 locationName: name,
//                 bedLength: bedLength,
//                 execDate: date
//             }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.status === 200) {
//             navigate("/log");
//             alert("Edited planting successfully.")
//         } else {
//             const errMessage = await response.json();
//             navigate("/log");
//             alert(`Status ${response.status}, unable to update this planting. Message: ${errMessage}`)
//         }
//     }

//     return (

//         <>
//         <h2>Edit a Planting</h2>
//         <p>Update a planting using the icons to change the values</p>
//         <table id="plantings" className='log-table'>
//             <caption>Edit a planting</caption>
//             <tbody>
//                 <tr>
//                     <td></td>
//                     <td></td>
//                     <td><label for='plantingname'>
//                         <input type="text" value={name} id="plantingname" 
//                         onChange={e => setName(e.target.value)} autofocus/>
//                     </label></td>
//                     <td><label for='plantingbedlength'>
//                         <input type="number" value="{length}" id="plantingbedlength" 
//                         onChange={e => setBedLength(e.target.value)} autofocus/>
//                     </label></td>
//                     <td><label for='plantingdate'>
//                         <input type="text" value={date} id="plantingdate" 
//                         onChange={e => setDate(e.target.value)} autofocus/>
//                     </label></td>
//                     <td><button onClick={editPlanting}>Save</button></td>
//             </tr>
//             </tbody>
//         </table>
//         </>
//     )
// };

export default EditPage;
