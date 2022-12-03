import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Search from '../components/Search'

export default function Home() {
  return (
    <div className="bg-slate-900 text-white h-screen">
      <div id='header-row' className='h-auto'>
        <Header />
      </div>
      <div id='search-row' className='h-1/5'><Search /></div>
    </div>
  );
}
