import { formatDate } from "../../helpers/formatDate";

import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className='container'>
        <h1 className={style["header__page-name"]}>News App</h1>
        <div className={style["header__date"]}>{formatDate(new Date())}</div>
      </div>
    </header>
  );
};
