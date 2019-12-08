import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import Navbar from './components/Navbar';
import Text from './components/Cards/Text';
import Image from './components/Cards/Image'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
  grid2:{
    backgroundColor:'beige',
  },
  item1:{
    margin:0,
    padding:0,
    backgroundColor:'#4f4f4f',
  },
  item2:{
    margin:0,
    padding:0,
    backgroundColor:'#3982b3',
  },
  grid1:{
    backgroundColor:'#A4A7B1',
  },
});


const onDragEnd = result => {
};


function App() {

  const classes = useStyles();
  return (
    <div>
        <div><Navbar /></div>

        <DragDropContext onDragEnd={onDragEnd}>

        <Grid container className={classes.grid1}  >

          <Grid item xs={6} >
            <Grid item className={classes.item1}><Text /><Image /></Grid>
            <Grid item className={classes.item2}><Text /><Text /></Grid>
          </Grid>

          <Grid item xs={6} className={classes.grid2}>
          </Grid>

        </Grid>
  
        </DragDropContext>
    </div>
  );
}

export default App;
