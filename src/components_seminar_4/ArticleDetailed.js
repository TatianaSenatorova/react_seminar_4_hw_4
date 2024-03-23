import React from "react";
import { useParams } from "react-router-dom";
// ищем статью по id.useParams() — это крючок в React Router, который позволяет получить доступ к параметрам текущего URL. Это хук, который работает с параметрами

// Это может быть полезно, если нужно динамически отображать контент на основе параметров URL. Например, в приложении для блога можно отображать разные статьи на основе идентификатора статьи в URL

const ArticleDetailed = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};
export default ArticleDetailed;