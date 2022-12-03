import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
export default function Home() {
  return (
    <div className="bg-slate-900 text-white h-screen">
      <div id='header-row' className='border h-1/5'>
        <Header />
      </div>
      <div id='search-row'></div>
    </div>
  );
}
