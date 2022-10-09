import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/banner/Banner';
import Category from '../components/categorySlider/Category';
import ProductHome from '../components/container/ProductHome';
import Cta from '../components/Cta';
import SubscribeModel from '../components/SubscribeModel';

const Home: NextPage = (props) => {
  return (
    <div>
      <SubscribeModel />
      <Banner />
      <Category />
      <ProductHome />
      <Cta />
    </div>
  );
};

export default Home;
