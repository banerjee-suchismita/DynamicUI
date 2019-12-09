import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import Navbar from './components/Navbar';
import Text from './components/Cards/Text';
import Image from './components/Cards/Image'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
  navigation: {
    height: '8%'
  },
  grid: {
    padding: '1rem',
  },
  half: {
    height: '92%',
    width: '49%',
    position: 'fixed',
    bottom: 0,
    padding: '5px'
  },
  left: {
    left: 0,
    borderRight: '2px dashed black',
  },
  right: {
    right: 0,
  },
  top: {
    height: '50%',
    top: 0,
    borderBottom: '2px dashed black',
    overflow: 'hidden'
  },
  bottom: {
    height: '50%',
    bottom: 0,
  }
});

const dummyValues = [
  { id: 0, title: "John wick", value: "i will buy mustang as my first car." },
  { id: 1, title: "Dodo", value: "my lovely bird" },
  { id: 2, title: "Duck", value: "duck's are friendly" },
  { id: 3, title: "bla", value: "bla bla bla blas bla" },
  { id: 4, title: "lorem ipsum", value: "dummy text from a decade" },
]

function App() {
  const classes = useStyles();
  const dummySortedValues = dummyValues.sort((a, b) => a.id - b.id)

  return (
    <div className={classes.navigation}>
      <Navbar />
      <Grid className={classes.grid}>
        <Grid className={`${classes.half} ${classes.left}`}>
          <Grid className={classes.top}>
            <Grid container spacing={3}>
              {dummySortedValues.map((dummy, key) => (
                <Grid key={key} item sm={6} xs={6}>
                  <Text title={dummy.title} value={dummy.value} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid className={classes.bottom}>
            <p>dodo duck lives here</p>
          </Grid>
        </Grid>
        <Grid className={`${classes.half} ${classes.right}`}>
          <p>dodo duck lives here</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
