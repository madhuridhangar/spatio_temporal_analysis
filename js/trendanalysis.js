const ams1 ="https://media.githubusercontent.com/media/madhuridhangar/NO2/main/ams1.csv";
const bar1 ="https://media.githubusercontent.com/media/madhuridhangar/NO2/main/bar1.csv";
const bir1 ="https://media.githubusercontent.com/media/madhuridhangar/NO2/main/bir1.csv";
const dub1 ="https://media.githubusercontent.com/media/madhuridhangar/NO2/main/dub1.csv";
const lon1 ="https://media.githubusercontent.com/media/madhuridhangar/NO2/main/lon1.csv";
const mad1 ="https://media.githubusercontent.com/media/madhuridhangar/NO2/main/mad1.csv";
const mil1 ="https://media.githubusercontent.com/media/madhuridhangar/NO2/main/mil1.csv";
const par1 ="https://media.githubusercontent.com/media/madhuridhangar/NO2/main/par1.csv";
const ruh1 ="https://media.githubusercontent.com/media/madhuridhangar/NO2/main/ruh1.csv";



shapes1=[
    //# 1st highlight during Feb 4 - Feb 6
    {
  type: 'rect',
  x0: '2020-01-05',
  y0: 0,
  x1: '2020-01-09',
  y1: 400,
  line: {
   // color: 'rgba(128, 0, 128, 1)',
    width: 0.1
  },
  fillcolor: 'tab:blue',//'rgba(128, 0, 128, 0.1)'
}
   // 2nd highlight during Feb 20 - Feb 23

];

ams_shape =[
  {
    type: 'rect',
    x0: '2020-03-09',
    y0: 0,
    x1: '2020-03-15',
    y1: 400,
    line: {
      // color: 'rgba(128, 0, 128, 1)',
       width: 0.1
     },
    fillcolor: 'blue',//'rgba(229, 204, 255, 0.3)',
    opacity: 0.2,
  },
  {
    type: 'rect',
    x0: '2020-03-16',
    y0: 0,
    x1: '2020-05-10',
    y1: 400,

    line: {
      // color: 'rgba(128, 0, 128, 1)',
       width: 0.1
     },
     fillcolor: 'red',//'rgba(229, 204, 255, 0.3)',
     opacity: 0.2,
  },
  {
    type: 'rect',
    x0: '2020-05-11',
    y0: 0,
    x1: '2020-06-14',
    y1: 400,
    line: {
      // color: 'rgba(128, 0, 128, 1)',
       width: 0.1
     },
     fillcolor: 'green',//'rgba(229, 204, 255, 0.3)',
     opacity: 0.2,
  },
  {
    type: 'rect',
    x0: '2020-06-15',
    y0: 0,
    x1: '2020-11-03',
    y1: 400,
    line: {
      // color: 'rgba(128, 0, 128, 1)',
       width: 0.1
     },
     fillcolor: 'blue',//'rgba(229, 204, 255, 0.3)',
     opacity: 0.2,
  },
  {
    type: 'rect',
    x0: '2020-11-04',
    y0: 0,
    x1: '2020-11-21',
    y1: 400,
    line: {
      // color: 'rgba(128, 0, 128, 1)',
       width: 0.1
     },
     fillcolor: 'purple',//'rgba(229, 204, 255, 0.3)',
     opacity: 0.2,
  },
  {
    type: 'rect',
    x0: '2020-11-22',
    y0: 0,
    x1: '2020-12-14',
    y1: 400,
    line: {
      // color: 'rgba(128, 0, 128, 1)',
       width: 0.1
     },
     fillcolor: 'blue',//'rgba(229, 204, 255, 0.3)',
     opacity: 0.2,
  },
  {
    type: 'rect',
    x0: '2020-12-15',
    y0: 0,
    x1: '2020-12-31',
    y1: 400,
    line: {
      // color: 'rgba(128, 0, 128, 1)',
       width: 0.1
     },
     fillcolor: 'brown',//'rgba(229, 204, 255, 0.3)',
     opacity: 0.2,
  },

]
// rgb(255,204,204,0.3) brown
// rgb(255, 229, 204,0.3) red
// rgb(255,255,204,0.3) orange
// rgb(204,255,204,0.3) olive
// rgb(204,255,255,0.3) green
// rgb(204,229,255,0.3) pink
//rgb(204,204,255,0.3) purple
// 'rgba(229, 204, 255, 0.3)' blue
// rgb(255,204,255,0.3) cyn








ams_title ='NO2 daily average values with 5 days moving average with µmol / m^2 around ';

function makeplot(path,shapes,title1,div_id) {
    Plotly.d3.csv(path, function(data){ processData(data,shapes,title1,div_id) } );
    title1 =  title1 + div_id;
};

function processData(allRows,shapes,title1,div_id) {
    var x = [], y1 = [],y2 = [],y3 = [], y4 =[], y5 =[], y6=[];

    for (var i=0; i<allRows.length; i++) {
      row = allRows[i];
      x.push( row['date'] );
      y1.push( row['18'] );
      y2.push( row['19'] );
      y3.push( row['20'] );
      y4.push( row['r7_18'] );
      y5.push( row['r7_19'] );
      y6.push( row['r7_20'] );
    }

    makePlotly( x,y1,y2,y3,y4,y5,y6, shapes,title1,div_id);
  }

  function makePlotly( x, y1,y2,y3,y4,y5,y6, shapes,title1,div_id ){

    var trace1 = {
      x: x,
      y: y1,
      name: "2018's data",
      mode: 'markers',
      type: 'scatter',
      marker:{
          color: 'rgb(0,0,0,0.3)',
    }
    };

    var trace2 = {
    x: x,
    y: y2,
    name: "2019's data",
    mode: 'markers',
    type: 'scatter',
    marker:{
          color: 'rgb(255, 0, 0,0.3) ',
    }
  };
  var trace3 = {
    x: x,
    y: y3,
    name: "2020's data",
    mode: 'markers',
    type: 'scatter',
    marker:{
          color: 'rgb(0,0,255.0.3)'
    }
  };
  var trace4 = {
    x: x,
    y: y4,
    name: "7 day's moving average of 2018",
    mode: 'lines',
    type: 'scatter',
    line:{
          color: 'rgb(0,0,0,0.3)',
    }
  };
  var trace5 = {
    x: x,
    y: y5,
    name: "7 day's moving average of 2019",
    mode: 'lines',
    type: 'scatter',
    line:{
          color: 'rgb(255, 0, 0,0.3) ',
    }
  };
  var trace6 = {
    x: x,
    y: y6,
    name: "7 day's moving average of 2020",
    mode: 'lines',
    type: 'scatter',
    line:{
          color: 'rgb(0,0,255.0.3)'

    }
  };


  var layout = {
    showlegend: true,
    legend: {"orientation": "h"},
    title: title1,
    xaxis: {

      title:'Dates',
      tickformat: '%B',
      autorange: false,
      range: ["2020-01-01", "2020-12-31"],
      nticks: 12,
     // automargin: {
       // bottom:true
      //}
      // For more time formatting types, see: https://github.com/d3/d3-time-format/blob/master/README.md
    },
    yaxis: {
      range : [ 0, 200 ],
      title: 'µmol / m^2'
    },
    // to highlight the timestamp we use shapes and create a rectangular
      'shapes': shapes,

  };



  //rgb(255, 0, 0)  red
  //rgb(0,0,0) black
  //rgb(0,0,255) blue
  var data = [trace1,trace2, trace3, trace4, trace5, trace6];

  var config = {responsive: true};


  Plotly.newPlot(div_id, data, layout);


  };


  //Plotly.newPlot('myDiv', data, layout);


    //makeplot(ams1,ams_shape,ams_title,'amsterdam');

   //Plotly.update('dublin', {xaxis:{   }});
   makeplot(ams1,ams_shape,ams_title,'Amsterdam');
   makeplot(bir1,ams_shape,ams_title,'Birmingham');
   makeplot(dub1,ams_shape,ams_title,'Dublin');
   makeplot(ruh1,ams_shape,ams_title,'Ruhr');
   makeplot(par1,ams_shape,ams_title,'Paris');
   makeplot(mil1,ams_shape,ams_title,'Milan');
   //makeplot(mad1,ams_shape,ams_title,'Madrid');
   makeplot(bar1,ams_shape,ams_title,'Barcelona');
   makeplot(lon1,ams_shape,ams_title,'London');