import React , {useContext, useEffect}from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../../src/ProTip';
import Link from '../../src/Link';
import Copyright from '../../src/Copyright';
import { useRouter } from 'next/router'

import { DataGrid,GridToolbar,GridToolbarContainer,
  GridToolbarExport,
  GridFilterToolbarButton,GridDensitySelector} from '@material-ui/data-grid';

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridFilterToolbarButton />
        <GridToolbarExport/>
        <GridDensitySelector/>
        
      </GridToolbarContainer>
    );
  }

export default function Table (){
    const router = useRouter()
    const columns = [
        { field: 'test', hide:true },
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
        {
          field: "",
          headerName: "Action",
          disableClickEventBubbling: true,
          width:200,
          renderCell: (params) => {
            function add(){
              const api = params.api;
              const fields = api
              .getAllColumns()
              .map((c) => c.field)
              .filter((c) => c !== "__check__" && !!c);
            const thisRow = {};
            fields.forEach((f) => {
              thisRow[f] = params.getValue(f);
            });
            
            router.push('/admin/users/'+ thisRow.id+'/edit')
    
            
            }
            return <Button variant="contained" onClick={add} varitan color="primary">Manage</Button>;
          }
        }
      ];

      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 , test:'test'},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
    return(
        <>
         <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection components={{
          Toolbar: CustomToolbar,
        }} loading='true'/>
    </div>
        </>
    )
}