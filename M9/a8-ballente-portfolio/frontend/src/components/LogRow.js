import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function LogRow({ planting, onDelete, onEdit }) {
    return (
            <tr>
                <td> 
                    {planting.locationName} 
                </td>
                <td>
                    {planting.bedLength}  
                </td>
                <td>
                    {planting.execDate.slice(0, 10)}
                </td>
                <td><Link to='/edit-planting' planting={planting}><FiEdit onClick={() => onEdit(planting)} /></Link></td>
                <td><MdDelete onClick={() => onDelete(planting._id)}/></td>
            </tr>
    )
}

export default LogRow;