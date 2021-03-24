import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { DatePicker } from 'antd';
import Character from '../components/Character';
import EpisodesById from '../components/EpisodesById';

export default function Home() {
  return (
    <>
      {/* <Character /> */}
      {/* <DatePicker /> */}
      <EpisodesById />
    </>
  );
}
