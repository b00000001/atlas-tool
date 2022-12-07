import {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Search from '../components/Search';
import Panel from '../components/Panel';

export default function Home() {
  const [coin, setCoin] = useState('stargaze');
  let handleChange = (e) => {
    e.preventDefault();
    setCoin(e.target[0].value);
  };
  return (
    <div className="bg-stone-900 text-white flex flex-col h-screen">
      <div id="header-row" className="h-auto">
        <Header/>
      </div>
      <div id="body-pane" className="h-full flex justify-center">
        <div id="inner-body-pane" className="h-full w-11/12 flex flex-col">
          <div className="w-full h-1/5">
            <Search handleChange={handleChange} />
          </div>
          <div className="h-auto pt-4">
            <Panel coin={coin}/>
          </div>
        </div>
      </div>
    </div>
  );
}
