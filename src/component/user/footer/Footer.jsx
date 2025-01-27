import style from "./footer.module.css";
import sendIcon from "../../../public/icons/icon-send.svg";
import AppIcon from "../../../public/icons/Apps.svg";
import FootList from "./FootList";
import TwitterIcon from'../../../public/Social/Twitter.svg'
import InstagramIcon from'../../../public/Social/Instagram.svg'
import FacebookIcon from'../../../public/Social/Facebook.svg'
import LinkedinIcon from'../../../public/Social/Linkedin.svg'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className={style.footerBody}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className={style.footContainer}>
              <div className={style.logo}>
                <h3>Exclusive</h3>
              </div>
              <div className={style.subLogo}>Subscribe</div>
              <div className="">
                <p className={style.para}>Get 10% off your first order</p>
              <div className={style.input}>
                <input type="text" className={style.realInput} placeholder="Enter your email" />
                <img src={sendIcon} className={style.sendIcon} alt="" />
              </div>
              </div>
            </div>
          </div>
          <FootList
            headder={"Support"}
            content={[
              "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
              "exclusive@gmail.com",
              "+88015-88888-9999",
            ]}
          />
          <FootList
            headder={"Account"}
            content={[
              "My Account",
              "Login / Register",
              "Cart",
              "Wishlist",
              "Shop",
            ]}
          />
          <FootList
            headder={"Quick Link"}
            content={["Privacy Policy", "Terms Of Use", "FAQ", "Contact"]}
          />
          <div className="col-lg-3 col-md-4 col-sm-6">
          <div className={style.footContainer}>
              
              <div className={style.subLogo}>Download App</div>
              <p className={style.para}>Save $3 with App New User Only</p>
              <img src={AppIcon} alt="" />
              <ul className={style.iconList}>
                <li><Link className={style.iconListItem +" "+ style.facebook}><img className={"z-2"} src={FacebookIcon} alt="" /></Link></li>
                <li><Link className={style.iconListItem +" "+ style.twetter}><img className={"z-2"} src={TwitterIcon} alt="" /></Link></li>
                <li><Link className={style.iconListItem +" "+ style.insta}><img className={"z-2"} src={InstagramIcon} alt="" /></Link></li>
                <li><Link className={style.iconListItem +" "+ style.linked}><img className={"z-2"} src={LinkedinIcon} alt="" /></Link></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
