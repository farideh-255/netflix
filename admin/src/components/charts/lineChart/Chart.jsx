import React from 'react'
import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title,data,dataKey1,dataKey2,grid}) {

  //  console.log("chart data=>",data);
  return (
    <div className='chart-container'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" height="100%" aspect={4/1} className="chart">
        <LineChart
          data={data}
        >
         {grid && <CartesianGrid strokeDasharray="3 3" stroke="#e0dfdf" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
        
    </div>
  )
}
