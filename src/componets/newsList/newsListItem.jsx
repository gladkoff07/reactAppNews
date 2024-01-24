import { formatTimeAgo } from "../../helpers/formatTimeAge";

import style from "./newsList.module.scss";

export const NewsListItem = (props) => {
  const { image, title, published, author } = props;

  return (
    <li className={style["news-list__item"]}>
      <div
        className={style["news-list__img"]}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={style["news-list__content"]}>
        <h4 className={style["news-list__title"]}>{title}</h4>
        <p className={style["news-list__author"]}>
          {formatTimeAgo(published)} by {author}
        </p>
      </div>
    </li>
  );
};
