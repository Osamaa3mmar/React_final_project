import style from './contact.module.css'
export default function ContactForm() {
    const submit=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={submit} className={style.form} >
        <div className={style.first}>
            <input type="text" className={style.input}  placeholder='Your Name *' required />
            <input type="text" className={style.input}  placeholder='Your Emaile *' required />
            <input type="text" className={style.input}  placeholder='Your Phone *' required />
        </div>
        <textarea name="" id="" className={style.textArea} rows={10}  placeholder='Your Massage' required></textarea>
        <button className={style.btn}>Send Massage</button>
      </form>
    </div>
  )
}
