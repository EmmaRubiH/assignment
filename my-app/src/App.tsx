import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataNode } from './interfaces';

const starterData: DataNode[] = [
  {
    path: '/',
    title: 'Some node 1',
    children: [
      {
        path: '/',
        title: 'Some node 1.1',
        children: [
          {
            path: '/',
            title: 'Some node 1.1.1',
          },
        ],
      },
      {
        path: '/',
        title: 'Some node 1.2',
      },
      {
        path: '/',
        title: 'Some node 1.3',
        children: [
          {
            path: '/',
            title: 'Some node 1.3.1',
          },
        ],
      },
      {
        path: '/',
        title: 'Some node 1.4',
      },
    ],
  },
  {
    path: '/',
    title: 'Some node 2',
  },
];

function App() {
  const [data, setData] = useState(starterData);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/0c140ce3-9944-46b4-a109-0e232f445937')
      .then((res) => res.json())
      .then((resData) => setData(resData as DataNode[]))
      .catch((error) => {
        console.error('error:', error);
      });
  }, []);

  if (data === starterData)
    return (
      <div className='grid place-items-center h-screen'>
        <Loading />
      </div>
    );
  return (
    <Router>

    </Router>
  );
}

export default App;
