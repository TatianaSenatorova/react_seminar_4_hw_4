import "./App.css";
import Box from "./components_seminar_4/ChildrenComponent";
import List from "./components_seminar_4/List";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ArticleList from "./components_seminar_4/ArticleList";
import ArticleDetailed from "./components_seminar_4/ArticleDetailed";


import AboutPage from "./components_hw_4/AboutPage";
import HomePage from "./components_hw_4/HomePage";

const articles = [
  { id: 1, title: "Статья 1", content: "Содержимое статьи 1" },
  { id: 2, title: "Статья 2", content: "Содержимое статьи 2" },
  { id: 3, title: "Статья 3", content: "Содержимое статьи 3" },
];

function App() {
  const listItems = [1, 2, 3, 4, 5];
  const renderItem = (item, index) => {
    const style = { color: index % 2 === 0 ? "blue" : "red" };
    return <div style={style}>{item}</div>;
  };
  return (
    <div className="App">
      <Box>
        <h2>Это потомок внутри border</h2>
      </Box>
      <Box>
        <List listItems={listItems} renderItem={renderItem}></List>
      </Box>
      <Router>
        <h1>Приложение для просмотра статей</h1>
        <Routes>
          <Route path="/" element={<ArticleList articles={articles} />} />
          <Route
            path="/articles/:id"
            element={<ArticleDetailed articles={articles} />}
          />
          <Route path="*" element={<ArticleList articles={articles} />} />
        </Routes>
      </Router>

      <Router>
        <h1>Домашнее задание: переход с одной страницы на другую</h1>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
