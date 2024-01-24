import { formatTimeAgo } from "../../helpers/formatTimeAge";
import { Image } from "../image/image";

import style from "./banner.module.scss";

export const Banner = ({ item }) => {
  const { image, title, published, author } = item;

  return (
    <div className={style.banner}>
      <Image image={image} />
      <h4 className={style["banner__title"]}>{title}</h4>
      <div className={style["banner__info"]}>
        {formatTimeAgo(published)} by {author}
      </div>
    </div>
  );
};
