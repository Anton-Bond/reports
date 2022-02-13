import React from 'react';
import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

import styles from './LandingPage.module.scss';

const Main = () => {

    return (
        <Box p={3}>
            <Card>
                <CardContent>
                    <Grid container align="stretch" direction="row" spacing={2}>
                        <Grid item 
                            sm={4}
                            md={4}
                            lg={4}>
                            <div>left menu</div>
                        </Grid>
                        <Grid item 
                            sm={8}
                            md={8}
                            lg={8}>
                            <div>rigth menu</div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Main;

// * <div className={styles.notification}>

// className={classNames({
//     [styles.messagebox]: expandedMessagebox
// })}