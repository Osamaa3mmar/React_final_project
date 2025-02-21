import { useState } from "react";
import Content from "../../../component/user/Products/Content";
import Pagination from "../../../component/user/Products/Pagination";
import style from './style.module.css';
export default function Products() {
  const [page, setPage] = useState(1);
  const pages = 3;
  return (
    <div className={`container ${style.cont}`}>
      <Content urll={`https://ecommerce-node4.onrender.com/products?page=${page}&limit=4`} />
      <Pagination Pages={pages} currentPage={page} onPageChange={setPage} />
    </div>
  );
}
