import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'

const Text = () => {
    return (
        <div>
            <Card style={{width:200,height:150,margin:10,marginTop:90}}>
                <CardContent>
                    <Typography variant="headline" component="h3">#Card </Typography>
                    <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.       
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Text;