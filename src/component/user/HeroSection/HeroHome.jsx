import Category from './Category'
import Swipe from './Swipe'
export default function HeroHome() {
  return (
      <div className='container mb-5'>
          <div className="row">
            <div className="col-lg-2 col-md-5 col-sm-10 m-auto">
            <Category/>
            </div>
            <div className="col-lg-10 col-md-7 col-sm-10  m-auto">
      <Swipe/>
     </div>
      </div>
    </div>
  )
}
