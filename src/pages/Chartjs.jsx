import React from "react";
import "./Chartjs.css";
import { Bar, Line } from "react-chartjs-2";
import { useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import axios from "axios";
 
const Chartjs = () => {
    const [chartData, setChartData] = useState([]);
    const [decesGueris, setDecesGueris] = useState([]);
    const [newChartData, setNewChartData] = useState([]);
 
    const chart = () => {
         let hospit = [];
         let rea = [];
         let code =[];
         let deces = [];
         let gueris = [];
         let newHospit = [];
         let newRea = [];
 
    axios
      .get("https://a.nacapi.com/covidcustom20210812")
      .then(res => {
        for (const dataObj of res.data.allLiveFranceData) {
          hospit.push(parseInt(dataObj.hospitalises));
          code.push(dataObj.nom)
          deces.push(dataObj.deces)
          rea.push(parseInt(dataObj.reanimation))
          gueris.push(parseInt(dataObj.gueris))
          newHospit.push(parseInt(dataObj.nouvellesHospitalisations))
          newRea.push(parseInt(dataObj.nouvellesReanimations))
        }

        setChartData({
          labels: code,
          datasets: [
            {
              type: "bar",
              label: "Nbre en réanimation",
              data: rea,
              backgroundColor: "#EB1D27",
              borderColor: "#EB1D27",
            },
            {
              type: "bar",
              label: "Nbre hospitalisation",
              data: hospit,
              backgroundColor: "#13C697",
              borderColor: "#13C697"
            },
          ],
          options:{
            responsive: true,
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

        setNewChartData({
          labels: code,
          datasets: [
            {
              type: "bar",
              label: "Nbre en réanimation",
              data: newRea,
              backgroundColor: "#EB1D27",
              borderColor: "#EB1D27",
            },
            {
              type: "bar",
              label: "Nbre hospitalisation",
              data: newHospit,
              backgroundColor: "#13C697",
              borderColor: "#13C697"
            },
          ],
          options:{
            responsive: true,
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
              backgroundColor: "#EB1D27",
              borderColor: "#EB1D27",
              fill: true,
            },

            {
              label: "Nbre de guéris",
              data: gueris,
              backgroundColor: "#13C697",
              borderColor: "#13C697",
              fill: true,
            },
            
          ],
          options:{
            responsive: true,
          }
        });
      })
  };
 
  useEffect(() => {
    chart();
    }, []);
 
    return (
      <div className="background-chart">
        <h1 className="title-chart-light">Graphiques repérentant différentes données et affichées par région</h1>
        <div className="containerChart">
          <Navbar />
          
          <div className="card">
              <h2 className="title-card">Hospitalisations globales</h2>
            <Bar data ={chartData} options={chartData.options} />
            </div>
            <div className="card">
              <h2 className="title-card">Nouvelles hospitalisations</h2>
            <Bar data ={newChartData} options={newChartData.options} />
            </div>
            <div className="card">
              <h2 className="title-card">Personnes guéris et décès</h2>
            <Line data ={decesGueris} options={decesGueris.options} />
            </div>
        </div>
      </div>
    )
}
 
export default Chartjs