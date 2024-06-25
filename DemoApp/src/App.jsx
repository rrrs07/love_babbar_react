import React from 'react'

import './App.css';
import Item from  './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const response = [
  {
    itemName: "Nirma",
    itemDate:"20",
    itemMonth:"June",
    itemYear:"2000"
  },
  {
    itemName: "Nirma2",
    itemDate:"21",
    itemMonth:"July",
    itemYear:"2002"
  },
  {
    itemName: "Nirma3",
    itemDate:"22",
    itemMonth:"Aug",
    itemYear:"2004"
  },
  {
    itemName: "Nirma4",
    itemDate:"23",
    itemMonth:"Sep",
    itemYear:"2006"
  }
];

  return (
    <>
     <Item  name= {response[0].itemName}>RRRS</Item>
     <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

     <Item name= {response[1].itemName}></Item>
     <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

     <Item name={response[2].itemName}></Item>
     <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

     <Item name= {response[3].itemName}></Item>
     <ItemDate day={response[3].itemDate} month={response[3].itemMonth} year={response[3].itemYear}></ItemDate>
     <div className="app">
       Hello dosto
     </div>
    </>
  );
}

export default App;
