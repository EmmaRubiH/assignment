import React, { useEffect, useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import SideBar from './components/Menu';
import { DataNode } from './interfaces';
import { ForgotPassword, Login, Register, ResetPassword } from './pages/Account';
import { Contact, Facebook, Twitter } from './pages/Contact';
import { Home } from './pages/Home';
import Users from './pages/Users';

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
    fetch('https://run.mocky.io/v3/21733624-590f-4443-8098-9a10ab5b4e3b')
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
      <div className='flex h-screen'>
        <SideBar data={data} />
        <div className='flex-grow bg-cover bg-center flex flex-col justify-center text-center'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/facebook' element={<Facebook />} />
        <Route path='/contact/twitter' element={<Twitter />} />
        <Route path='profile/settings/account/login' element={<Login />} />
            <Route
              path='profile/settings/account/register'
              element={<Register />}
            />
            <Route
              path='profile/settings/account/forgot-password'
              element={<ForgotPassword />}
            />
            <Route
              path='profile/settings/account/reset-password'
              element={<ResetPassword />}
            />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
