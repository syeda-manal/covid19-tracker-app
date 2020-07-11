

// import React, {useState, useEffect} from 'react';
// import {Line} from 'react-chartjs-2';

// export default function Graph(props){

//   const [dailyData, setDailyData] = useState({});
//   let initialState = {
//     cases: "",
//     recovered: "",
//     deaths: "",
//     date: ""
// }
// // const [graphData, setGraphData] = useState(initialState);



//   useEffect(() => {
//     async function getGlobalData() {
//       const proxyurl = "https://cors-anywhere.herokuapp.com/";
//       const countriesResponse = await fetch(proxyurl+"https://thevirustracker.com/timeline/map-data.json");
//       const dataC = await countriesResponse.json();

//       setDailyData(dataC.data);
//     }
//     getGlobalData();

//   }, [])

//   console.log(dailyData);

//   if(dailyData.length == 0){
//     return 'Loading';
//   }
  
// // console.log(graphData, "graph Data");
//   const lineChart = (
  
//       dailyData.length!=0 ? (
//         <Line
//         data = {{
//           labels: '',
//            datasets: [{
//              data: '',
//              label: 'Infected',
//              borderColor: "#e64a19",
//              fill: true,
//            }, 
//            {
//             data: '',
//             label: 'Deaths',
//             borderColor: "#d32f2f",
//             fill: true,

//            }],
//         }}
//          />): null
//   );

 
//     return (
//       <div>
//         <h2>Line Example</h2>
//         {lineChart}
      
//         {/* <Line
//          data={{
//            labels: '',
//            datasets: [
//             {
//               label: 'Total Cases',
//               fill: true,
//               lineTension: 0.1,
//               backgroundColor: 'red',
//               borderColor: 'rgba(75,192,192,1)',
//               borderCapStyle: 'butt',
//               borderDash: [],
//               borderDashOffset: 0.0,
//               borderJoinStyle: 'miter',
//               pointBorderColor: 'rgba(75,192,192,1)',
//               pointBackgroundColor: '#fff',
//               pointBorderWidth: 1,
//               pointHoverRadius: 5,
//               pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//               pointHoverBorderColor: 'rgba(220,220,220,1)',
//               pointHoverBorderWidth: 2,
//               pointRadius: 1,
//               pointHitRadius: 10,
//               data: props.display.total_cases,
//             },
//             {
//               label: 'Total Deaths',
//               fill: false,
//               lineTension: 0.1,
//               backgroundColor: 'rgba(75,192,192,0.4)',
//               borderColor: 'rgba(75,192,192,1)',
//               borderCapStyle: 'butt',
//               borderDash: [],
//               borderDashOffset: 0.0,
//               borderJoinStyle: 'miter',
//               pointBorderColor: 'rgba(75,192,192,1)',
//               pointBackgroundColor: '#fff',
//               pointBorderWidth: 1,
//               pointHoverRadius: 5,
//               pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//               pointHoverBorderColor: 'rgba(220,220,220,1)',
//               pointHoverBorderWidth: 2,
//               pointRadius: 1,
//               pointHitRadius: 10,
//               data: props.display.total_cases,
//             },
//             {
//               label: 'Total Recovered',
//               fill: false,
//               lineTension: 0.1,
//               backgroundColor: 'rgba(75,192,192,0.4)',
//               borderColor: 'rgba(75,192,192,1)',
//               borderCapStyle: 'butt',
//               borderDash: [],
//               borderDashOffset: 0.0,
//               borderJoinStyle: 'miter',
//               pointBorderColor: 'rgba(75,192,192,1)',
//               pointBackgroundColor: '#fff',
//               pointBorderWidth: 1,
//               pointHoverRadius: 5,
//               pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//               pointHoverBorderColor: 'rgba(220,220,220,1)',
//               pointHoverBorderWidth: 2,
//               pointRadius: 1,
//               pointHitRadius: 10,
//               data: props.display.recovered,
//             }
//           ]

//          }} /> */}
        
//       </div>
//     );
// }
