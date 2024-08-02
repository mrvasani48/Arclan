import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Info from '../components/Info.jsx'
import Collection from '../components/Collection';
import Footer from '../components/Footer.jsx';
import GallerySection from '../components/GallerySection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';

const Main = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <Info />
    <Collection />
    <FeaturesSection />
    <GallerySection />
    <Footer />
    </>
  )
}

export default Main