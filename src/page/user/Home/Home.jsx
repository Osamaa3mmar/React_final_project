import { Link } from 'react-router-dom'
import ProductContainer from '../../../component/user/ProducrContainer/ProductContainer'
import SectionHead from '../../../component/user/SectionHead/SectionHead'
import Services from '../../../component/user/servicesSection/Services'
import style from './home.module.css'
import HeroHome from '../../../component/user/HeroSection/HeroHome'
import CategoryImgs from '../../../component/user/categoryimgs/CategoryImgs'
import Ads from '../../../component/user/Ads/Ads'
export default function Home() {
  return (
    <div className="container">
      <section className='hero'>
        <HeroHome/>
      </section>




      <section className="bestSelling">
        <SectionHead title={"This Month"} subtitle={'Best Selling Products'} type={"arrow"}/>
        <ProductContainer url={'https://ecommerce-node4.onrender.com/products?page=2'}/>
      </section>
      <section className='browse by category'>
      <SectionHead title={"Categories"} subtitle={"Browse By Category"} type={""}/>
      <CategoryImgs/>
    </section>

      <section className="explorProducts">
      <SectionHead title={"Our Products"} subtitle={'Explore Our Products'} type={"btn"}/>
      <ProductContainer url={'https://ecommerce-node4.onrender.com/products?page=1&limit=8'}/>
        <div className={style.view}><Link className={style.viewALlBtn} to={'/user/products'}>View All Products</Link></div>
      </section>

   


      <section className='adds'>
      <SectionHead title={"Featured"} subtitle={'New Arrival'} type={""}/>
        <Ads/>
      </section>
      <section className="services">
        <Services/>
      </section>
    </div>
  
  )
}
