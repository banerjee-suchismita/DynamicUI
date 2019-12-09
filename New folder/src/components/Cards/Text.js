import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    display: 'flex'
  }
})

const Text = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent style={{ paddingBottom: '5px' }}>
        <Typography variant="headline" component="h3">{props.title}</Typography>
        <Typography component="p">{props.value}</Typography>
      </CardContent>
    </Card>
  );
}

export default Text;