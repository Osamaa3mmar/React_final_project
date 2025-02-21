import style from './style.module.css'
export default function Pagination({Pages,currentPage,onPageChange}) {
  let content=[];
  const changePage=(u)=>{
    onPageChange(u);
  }
  for(let i=1;i<=Pages;i++){
    content.push(<div key={i} onClick={()=>{changePage(i)}} className={i==currentPage?style.pagBtnActive:style.pagBtn}>{i}</div>);
  }

  return (
    <div className={style.pagCont}>
{content}
    </div>
  )
}
