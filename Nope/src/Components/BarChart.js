import React, { Component } from 'react'
import Chart from 'chart.js'


export default class BarChart extends Component {

constructor(props){
    super(props);
    this.canvasRef = React.createRef();
}


 getData() {
   let data1=[];
    const xlabels =[];
    const ytemps =[];

    const response =  fetch('GLB.Ts+dSST.csv');
    const data =  response.text();
    
    const table=data.split('\n').slice(1);
    table.forEach(row => {
        const columns =  row.split(',');
        const year = columns[0];
        xlabels.push(year);
        const temp = columns[1];
        ytemps.push(parseFloat(temp)+14  );
        console.log(year, temp);
    });

    data1={xlabels,ytemps};
    return data1;
    
}

componentDidMount()
{
    const data= this.getData();
    const ctx = this.canvasRef.current;
    this.myChart=new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.xlabels,
        datasets: [{
            label: 'Global Average Temperature',
            data: data.ytemps, 
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)', 
            borderColor: 
                'rgba(255, 99, 132, 1)',
            fill : false,
            borderWidth: 1
        }]
    },
});

this.props.onRef(this);

}


render() {
    return <canvas ref={this.canvasRef}/>
    }
}
