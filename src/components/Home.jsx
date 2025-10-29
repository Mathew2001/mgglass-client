import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../const'
import meklahon1 from '../assets/pictures/meklahon/meklahon1.png'
import meklahon2 from '../assets/pictures/meklahon/meklahon2.png'
import pergola1 from '../assets/pictures/pergolas/pergola1.jpeg'
import pergola2 from '../assets/pictures/pergolas/pergola2.jpeg'
import pergola3 from '../assets/pictures/pergolas/pergola3.jpeg'
import makot1 from '../assets/pictures/makot/makot1.jpg'
import NewReview from './reviews/NewReview'
import Reviews from './reviews/Reviews'
import HomeCards from './HomeCards'
import { useTranslation } from 'react-i18next'
import WhyUs from './WhyUs'

const Home = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const businessName = t('businessName')
  const showers = t('showers')
  const pergolas = t('pergolas')
  const railings = t('railings')
  const showersDescription = t('showersDescription')
  const pergolasDescription = t('pergolasDescription')
  const railingsDescription = t('railingsDescription')
  const { homePageDescription1, homePageDescription2 } = t('homeDescription', { returnObjects: true })

  const [currentPergolaImage, setCurrentPergolaImage] = useState(0);
  const pergolaImages = [pergola1, pergola2, pergola3];
  const [currentMeklahonImage, setCurrentMeklahonImage] = useState(0);
  const meklahonImages = [meklahon1, meklahon2];
  const [currentMakotImage, setCurrentMakotImage] = useState(0);
  const makotImages = [makot1];

  useEffect(() => {
    const pergolaInterval = setInterval(() => {
      setCurrentPergolaImage((prev) => (prev + 1) % pergolaImages.length);
    }, 5000);

    const meklahonInterval = setInterval(() => {
      setCurrentMeklahonImage((prev) => (prev + 1) % meklahonImages.length);
    }, 5000);

    const makotInterval = setInterval(() => {
      setCurrentMakotImage((prev) => (prev + 1) % makotImages.length);
    }, 5000);

    return () => {
      clearInterval(pergolaInterval);
      clearInterval(meklahonInterval);
      clearInterval(makotInterval);
    };
  }, []);

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="display-3 mb-4">{businessName}</h1>
        <p className="lead">{homePageDescription1}</p>
        <p className="lead">{homePageDescription2}</p>
      </div>

      <div className="d-flex flex-column gap-4">
        <HomeCards title={showers} description={showersDescription} image={meklahonImages[currentMeklahonImage]} link={ROUTES.MECKLAHONS} />
        <HomeCards title={pergolas} description={pergolasDescription} image={pergolaImages[currentPergolaImage]} link={ROUTES.PROGLOT} />
        <HomeCards title={railings} description={railingsDescription} image={makotImages[currentMakotImage]} link={ROUTES.MAKOT} />
      </div>

      <WhyUs />
      <Reviews />
      <NewReview />
    </div>
  )
}

export default Home