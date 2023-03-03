import * as React from 'react';
import { Container, Link, Stack, Typography, Breadcrumbs, Grid, Button, } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit, RemoveRedEye } from '@mui/icons-material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 230 },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'address', headerName: 'Address', width: 330 },
    {
        headerName: "Actions",
        headerAlign: "center",
        field: "actions",
        minWidth: 180,
        align: "center",
        flex: 1,
        sortable: false,
        renderCell: function render({ row }) {
            return (
                <Stack direction="row" spacing={1}>
                    <Button href={`/customer/view/${row.id}`}><RemoveRedEye style={{color:"blue"}}/></Button>
                    <Delete style={{color:"red"}}/>
                </Stack>
            );
        },
    },
  ];

  const rows = [
    { id: 1, name: 'Fazri', email: 'fazri@email.com', address: 'Jl. Gatot Subtroto - Jakarta Barat', age: 35, action:'' },
    { id: 2, name: 'Fazri', email: 'fazri@email.com', address: 'Jl. Gatot Subtroto - Jakarta Barat', age: 35, action:'' },
    { id: 3, name: 'Fazri', email: 'fazri@email.com', address: 'Jl. Gatot Subtroto - Jakarta Barat', age: 35, action:'' },
    { id: 4, name: 'Fazri', email: 'fazri@email.com', address: 'Jl. Gatot Subtroto - Jakarta Barat', age: 35, action:'' },
    { id: 5, name: 'Fazri', email: 'fazri@email.com', address: 'Jl. Gatot Subtroto - Jakarta Barat', age: 35, action:'' },
    { id: 6, name: 'Fazri', email: 'fazri@email.com', address: 'Jl. Gatot Subtroto - Jakarta Barat', age: 35, action:'' },
    { id: 7, name: 'Fazri', email: 'fazri@email.com', address: 'Jl. Gatot Subtroto - Jakarta Barat', age: 35, action:'' },
    { id: 8, name: 'Fazri', email: 'fazri@email.com', address: 'Jl. Gatot Subtroto - Jakarta Barat', age: 35, action:'' },
    { id: 9, name: 'Fazri', email: 'fazri@email.com', address: 'Jl. Gatot Subtroto - Jakarta Barat', age: 35, action:'' },
  ];

export default function Customer(){

    const breadcrumbs = [
        <Link key="1" color="inherit" href="/">
          Home
        </Link>,
        <Typography key="3" color="text.primary">
          Customer
        </Typography>
    ]

    return(
        <Container fixed>
            <Stack spacing={2} className="mt-2">
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <Grid container paddingTop={2}>
                <Grid item xs={12} sm={12}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}