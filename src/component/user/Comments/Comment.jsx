import Stars from "../../../page/user/product/Stars";
import style from "./style.module.css";
import userIcon from '../../../public/Login/user.jpg'
export default function Comment({ rating,createdAt,comment,createdBy }) {
    
    const date = new Date(createdAt);
    const formattedDate = date.toLocaleDateString("en-CA");
    
  return (
    <div className={style.commentContainer}>
      <div className={style.profile}>
        <img src={userIcon} className={style.userImage} alt="" />
        <p className={style.userName}>{createdBy.userName}</p>
        <div className={style.tags}>
          <p className={style.status}>
            <span></span> {createdBy.status}
          </p>
          <p className={style.role}>
            <span></span>{createdBy.role}
          </p>
        </div>
      </div>
      <div className={style.starHolder}>
      <Stars type={"static"} number={rating} />
      </div>
      <div className={style.date}>{formattedDate} </div>
      <div>
        <p className={style.commentText}>{comment}</p>
      </div>
    </div>
  );
}
