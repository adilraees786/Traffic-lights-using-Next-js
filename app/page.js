"use client"
import { useState, useEffect } from 'react';

function TrafficLight() {
  const [signal, setSignal] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      switch (signal) {
        case 'red':
          setSignal('yellow');
          break;
        case 'yellow':
          setSignal('green');
          break;
        case 'green':
          setSignal('red');
          break;
        default:
          setSignal('red');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [signal]);

  return (
    <div className=" bg-slate-400 g h-screen">
      <div className='text-center py-10'>
        <h1 className='text-5xl font-semibold text-red-700'>Traffic Lights signals </h1>
      </div>
    
      <div className="w-fit bg-black p-6 mx-auto my-16 flex gap-6 flex-col rounded-md shadow-[1px_1px_15px_5px_rgba(0,0,0,.5)]">
        <div
          className={`w-16 h-16 rounded-full  ${
            signal === 'red' ? 'bg-red-500' : 'bg-gray-300'
          }`}
        />
        <div
          className={`w-16 h-16 rounded-full ${
            signal === 'yellow' ? 'bg-yellow-500' : 'bg-gray-300'
          }`}
        />
        <div
          className={`w-16 h-16 rounded-full ${
            signal === 'green' ? 'bg-green-500' : 'bg-gray-300'
          }`}
        />
      </div>
      <div>
      <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
       
      </div>
    </footer>
      </div>
    </div>
  );
}

export default TrafficLight;

