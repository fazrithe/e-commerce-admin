import { Grid, Paper } from "@mui/material";

export {CustomerDetail};

function CustomerDetail(id){

    return (
        <>
        <Paper>
            <Grid container padding={3}>
                <Grid item xs={12} sm={12}>
                <Grid container>
                    <Grid item xs={6} sm={2}>
                        Name
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        Name
                    </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sm={2}>
                            Email
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            Email
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sm={2}>
                            Phone Number
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            Phone Number
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sm={2}>
                            Address
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            Address
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Paper>
        </>
    );
}