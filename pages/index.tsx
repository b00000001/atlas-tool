import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Search from '../components/Search';

export default function Home() {
  return (
    <div className="bg-zinc-900 text-white flex flex-col h-screen">
      <div id="header-row" className="h-auto">
        <Header />
      </div>
      <div id="body-pane" className="h-full flex justify-center">
        <div id="inner-body-pane" className="h-full w-11/12 flex justify-center">
          <div className='w-full'><Search /></div>
        </div>
      </div>
    </div>
  );
}
