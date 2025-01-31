import { Link } from 'react-router-dom'
import ProductContainer from '../../../component/user/ProducrContainer/ProductContainer'
import SectionHead from '../../../component/user/SectionHead/SectionHead'
export default function Home() {
  return (
    <div className="container">
      <section className="bestSelling">
        <SectionHead title={"This Month"} subtitle={'Best Selling Products'} type={"btn"}/>
        <ProductContainer url={'https://ecommerce-node4.onrender.com/products?page=1&limit=4'}/>
      </section>
      <section className="explorProducts">
      <SectionHead title={"Our Products"} subtitle={'Explore Our Products'} type={""}/>
      <ProductContainer url={'https://ecommerce-node4.onrender.com/products?page=1&limit=8'}/>
        <div className='m-auto'><Link to={'/user/products'}>View All Products</Link></div>
      </section>
    </div>
  
  )
}
