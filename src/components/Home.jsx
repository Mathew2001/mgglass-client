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

const Home = () => {
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
        <h1 className="display-3 mb-4">זכוכית מעיליא</h1>
        <p className="lead">מומחים במקלחונים, פרגולות ומעקות מאלומיניום וזכוכית</p>
        <p className="lead">עיצוב מודרני, איכות ללא פשרות ושירות מקצועי כבר למעלה מ-20 שנה</p>
      </div>

      <div className="d-flex flex-column gap-4">
        <HomeCards title="מקלחונים" description="מקלחונים מעוצבים מזכוכית ואלומיניום באיכות גבוהה. אנו מציעים מגוון רחב של עיצובים מודרניים ומסורתיים, המותאמים לכל חלל אמבטיה. המקלחונים שלנו מיוצרים מחומרים עמידים במיוחד, קלים לניקוי ותחזוקה, ומעניקים מראה יוקרתי ונקי לחדר האמבטיה שלכם." image={meklahonImages[currentMeklahonImage]} link={ROUTES.MECKLAHONS} />
        <HomeCards title="פרגולות" description="פרגולות מאלומיניום וזכוכית בהתאמה אישית. הפרגולות שלנו מעוצבות בקפידה ומותאמות לאקלים הישראלי, מספקות הצללה מושלמת ומראה אלגנטי לחצר ביתכם. אנו משלבים חומרים איכותיים עם טכנולוגיות מתקדמת ליצירת פרגולות עמידות, מבודדות ומרשימות." image={pergolaImages[currentPergolaImage]} link={ROUTES.PROGLOT} />
        <HomeCards title="מעקות" description="מעקות מעוצבים מאלומיניום וזכוכית לבית ולעסק. המעקות שלנו משלבים בטיחות מקסימלית עם אסתטיקה מודרנית, מתאימים למדרגות, מרפסות וגגות. אנו מקפידים על תקני הבטיחות המחמירים ביותר תוך שמירה על עיצוב נקי ואלגנטי." image={makotImages[currentMakotImage]} link={ROUTES.MAKOT} />
      </div>

      <div className="mt-5">
        <h2 className="h3 mb-4 text-end">למה לבחור בזכוכית מעיליא?</h2>
        <div className="d-flex flex-column align-items-start ">
          <div className="p-1 text-end">
            <h4 className="h5">איכות ללא פשרות</h4>
            <p className="mb-0">• אנו מקפידים על שימוש בחומרים מהאיכות הגבוהה ביותר לעמידות מקסימלית.</p>
            <p className="mb-0">• כל מוצר עובר בקרת איכות קפדנית לפני התקנה להבטחת שביעות רצון מלאה.</p>
          </div>
          <div className="p-1 text-end">
            <h4 className="h5">מקצועיות</h4>
            <p className="mb-0">• הצוות המקצועי שלנו מביא שנים של ניסיון וידע מעמיק בתחום.</p>
            <p className="mb-0">• אנחנו מתעדכנים באופן תדיר בחידושים האחרונים ומביאים את הטכנולוגיות המתקדמות.</p>
          </div>
          <div className="p-1 text-end">
            <h4 className="h5">שירות אישי</h4>
            <p className="mb-0">• אנו מספקים ליווי מקצועי צמוד והתאמה מושלמת לצרכי כל לקוח.</p>
            <p className="mb-0">• מעניקים אחריות מלאה על כל עבודה ומחויבים לשביעות רצון הלקוח.</p>
          </div>
        </div>
      </div>
      <Reviews />
      <NewReview />
    </div>
  )
}

export default Home