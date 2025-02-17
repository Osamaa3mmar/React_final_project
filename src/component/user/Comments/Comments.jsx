import Comment from './Comment'
import style from './style.module.css'

export default function Comments({comments}) {


  return (
    <div className={style.commentsContainer}>
      {comments.reverse().map((comment ,index)=>{
        return <Comment key={index} {...comment}/>
      })}
    </div>
  )
}
