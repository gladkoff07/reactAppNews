import { NewsListItem } from "./newsListItem";

import style from "./newsList.module.scss";

export const NewsList = ({ news }) => {
  return (
    <ul className={style["news-list"]}>
      {news.slice(1).map((item) => (
        <NewsListItem
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  );
};
