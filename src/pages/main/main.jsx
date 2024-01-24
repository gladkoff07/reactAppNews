import { useEffect, useState } from "react";
import { Banner } from "../../componets/banner/banner";
import { getNews } from "../../api/apiNews";
import { NewsList } from "../../componets/newsList/newsList";

import style from "./main.module.scss";

export const Main = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNewsList(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={style.main}>
      <div className='container'>
        {newsList.length > 0 ? <Banner item={newsList[0]} /> : null}
        <NewsList news={newsList} />
      </div>
    </main>
  );
};
