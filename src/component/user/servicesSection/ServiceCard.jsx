import style from './card.module.css'
export default function ServiceCard({img,title,p}) {
  return (
    <div className={style.card}>
      <img className={style.img} src={img} alt="" />
      <h3 className={style.title}>{title}</h3>
      <p className={style.p}>{p}</p>
    </div>
  )
}
