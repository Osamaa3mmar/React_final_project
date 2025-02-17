import { useState } from "react";
import Comments from "./Comments";
import CreateComment from "./CreateComment";
import style from './style.module.css'
export default function CommentContainer({reviews}) {
  const [rev,setRev]=useState(reviews);
  return (
    <div className={style.container}>
      <CreateComment setNewComment={setRev}/>
      <div className={style.line}></div>
      <Comments comments={reviews}/>
    </div>
  )
}
