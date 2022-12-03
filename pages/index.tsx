import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Search from '../components/Search';
import Panel from '../components/Panel';

export default function Home() {
  return (
    <div className="bg-stone-900 text-white flex flex-col h-screen">
      <div id="header-row" className="h-auto">
        <Header />
      </div>
      <div id="body-pane" className="h-full flex justify-center">
        <div
          id="inner-body-pane"
          className="h-full w-11/12 flex flex-col"
        >
          <div className="w-full">
            <Search />
          </div>
          <div className='h-full'><Panel /></div>
        </div>
      </div>
    </div>
  );
}
