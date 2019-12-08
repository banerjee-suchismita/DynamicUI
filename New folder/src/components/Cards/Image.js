import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core'

const Image = () => {
    return (
        <div>
            <Card style={{width:200,height:200,margin:10,marginTop:90}}>
                <CardContent>
                    <CardMedia /> 
                    <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.      
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Image;