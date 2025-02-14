import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import style from "./profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faBriefcase, faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
export default function CustomSideBar() {
  const [collapesd, setCollapesd] = useState(true);
  const coll = () => {
    setCollapesd(!collapesd);
  };
  return (
    <div className={style.sideBar}>
      <ul className={collapesd?style.collabsed:''}>
        {collapesd?"":<li className={style.xMark}  onClick={coll}>
        <FontAwesomeIcon icon={faXmark} className={style.xMarkIcon} />
        </li>}
        
        <li>
          <Link to={"/user/profile/main"} className={`${style.listItem} ${collapesd?style.listItemCollapsed:''}`}><FontAwesomeIcon className={style.icon} icon={faUser} /> {collapesd?'':<span>Profile</span>}</Link>
        </li>
        <li>
          <Link to={"/user/profile/edit"} className={`${style.listItem} ${collapesd?style.listItemCollapsed:''}`}> <FontAwesomeIcon className={style.icon} icon={faPenToSquare} /> {collapesd?'':<span>Edit</span>}</Link>
        </li>
        <li>
          <Link to={"/user/profile/orders"} className={`${style.listItem} ${collapesd?style.listItemCollapsed:''}`}><FontAwesomeIcon className={style.icon} icon={faBriefcase} /> {collapesd?'':<span>Orders</span>} </Link>
        </li>
      </ul>
 
      {collapesd?<div onClick={coll} className={style.arrow}>
        <FontAwesomeIcon
          className={`${style.arrowIcon} ${collapesd ? "" : style.rotate}`}
          icon={faAngleUp}
        />
      </div>:''}
    </div>
  );
}
