import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { CustomerDetail } from '@/components/customer/CustomerDetail';

export default Detail;

function Detail({ id }) {

    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={12} sm={12} paddingTop={4}>
                    <Typography variant='h5'>Customer</Typography>
                </Grid>
            </Grid>
            <CustomerDetail customer={id}/>
        </Container>
    );
}

export async function getServerSideProps({ params }) {
    return {
        props: { id: params.id }
    }
}
