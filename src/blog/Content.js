import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";

import Header1 from "../component/Header1";

function Content(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <Header1/>
      <div className="all__news row" >
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Content;