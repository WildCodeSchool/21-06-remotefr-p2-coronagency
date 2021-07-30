import React from "react";
import "./Chartjs.css";
import { Bar, Line } from "react-chartjs-2";
import { useState, useEffect} from 'react';
import axios from "axios";
 
const Chartjs = () => {
    const [chartData, setChartData] = useState([]);
    const [decesGueris, setDecesGueris] = useState([]);
 
    const chart = () => {
         let hospit = [];
         let rea = [];
         let code =[];
         let deces = [];
         let gueris = [];
 
    axios
      .get("https://a.nacapi.com/covidcustom")
      .then(res => {
        for (const dataObj of res.data.allLiveFranceData) {
          hospit.push(parseInt(dataObj.hospitalises));
          code.push(dataObj.nom)
          deces.push(dataObj.deces)
          rea.push(parseInt(dataObj.reanimation))
          gueris.push(parseInt(dataObj.gueris))
        }

        setChartData({
          labels: code,
          datasets: [
            {
              type: "bar",
              label: "Nbre en réanimation",
              data: rea,
              backgroundColor: "#FF0000",
              borderColor: "#FF0000",
            },
            {
              type: "bar",
              label: "Nbre hospitalisation",
              data: hospit,
              backgroundColor: "#18DBA8",
              borderColor: "#18DBA8"
            },
          ],
          options:{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: "Hopitalisation par région"
              }
            },
            interaction: {
              intersect:false,
            },
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked:true,
              },
            },
          }
        });

        setDecesGueris({
          labels: code,
          datasets: [
            {
              label: "Nbre de décès",
              data: deces,
              backgroundColor: "#FF0000",
              borderColor: "#FF0000",
              fill: true,
              //borderWidth: 4
            },

            {
              label: "Nbre de guéris",
              data: gueris,
              backgroundColor: "#18DBA8",
              borderColor: "#18DBA8",
              fill: true,
              //borderWidth: 4
            },
            
          ],
          options:{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: "Guéris et Décès par région"
              }
            }
          }
        });
      })
  };
 
  useEffect(() => {
    chart();
    }, []);
 
    return (
        <div className="container">
 
            <div className="card">
            <Bar data ={chartData} options={chartData.options} />
            </div>
            <div className="card">
            <Line data ={decesGueris} options={decesGueris.options} />
            </div>
        </div>
    )
}
 
export default Chartjs