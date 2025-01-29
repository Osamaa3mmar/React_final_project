import style from './loading.module.css'
export default function Loading() {
  return (
    <div className={style.loadingBody}>
      <div className={style.loader}></div>
    </div>
  )
}
