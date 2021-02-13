import React from 'react'
import Table_td from './Table_td';
import styled from 'styled-components';

const Table = styled.table`
    margin-top: 30px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    width: 100%;
    background-color: #ccc;
    white-space: nowrap;
    caption {
        color: black;
        padding: 10px;
        font-size: 22px;
        font-weight: 600;
    }
    td, th {
        border: 1px solid #ccc;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: lightgreen;
        color: white;
    }
    tfoot td {
        background-color: rgba(1,1,1,.5);
        color: #fff;
    }
    @media (max-width: 530px) {
        font-size: 12px;
        td, th {
            padding: 5px;
        }
    }
    @media (max-width: 390px) {
        width: auto;
        font-size: 10.5px;
        td, th {
            padding: 2px;
        }
    }
`;
const ManifestTable = React.memo(({name, launch_date, landing_date, max_date, max_sol, status, total_photos}) => {
    return (
        <>
            <Table>
                <caption>Mission Manifest</caption>
                <thead>
                    <tr> 
                        <th colSpan="2">{name.length > 0 && name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Table_td payload={`The Rover's launch date from Earth`}/>
                        <Table_td payload={launch_date}/>
                    </tr>
                    <tr>
                        <Table_td payload={`The Rover's landing date on Mars`}/>
                        <Table_td payload={landing_date}/>
                    </tr>
                    <tr>
                        <Table_td payload={`The most recent Earth date from which photos exist`}/>
                        <Table_td payload={max_date}/>
                    </tr>
                    <tr>
                        <Table_td payload={'The most recent Martian sol from which photos exist'}/>
                        <Table_td payload={max_sol}/>
                    </tr>
                    <tr>
                        <Table_td payload={`The Rover's mission status`}/>
                        <Table_td payload={status}/>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <Table_td payload={`Number of photos taken by that Rover`}/>
                        <Table_td payload={total_photos}/>
                    </tr>
                </tfoot>
            </Table>
        </>
    )
});
export default ManifestTable;
