import React, { useState } from 'react';
import LogRow from './LogRow';

function LogTable ({ plantings, onDelete, onEdit }) {


        return (
            <table>
                <caption>
                    Table Of Plantings
                </caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Length</th>
                        <th>Year</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {plantings.map((planting, index) => <LogRow planting={planting} onDelete={onDelete} onEdit={onEdit} key={index}/>)}
                </tbody>
            </table>
        )
}

export default LogTable;