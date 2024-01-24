import style from "./image.module.scss";

export const Image = ({ image }) => {
  return (
    <div className={style["wrapper-image"]}>
      {image ? (
        <img
          src={image}
          alt=''
        />
      ) : null}
    </div>
  );
};
