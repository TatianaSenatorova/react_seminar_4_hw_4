import React from "react";
import { Link } from "react-router-dom";

// Создать приложение с двумя страницами: "Главная страница" и "О нас".
// На каждой странице должна быть навигационная ссылка для перехода на другую страницу.
// Шаги выполнения:
// Установка react-router-dom:
// Если еще не установлен, добавьте react-router-dom в ваш проект: npm install react-router-dom.
// Создание компонентов:
// Создайте два компонента: HomePage.jsx и AboutPage.jsx.
// В каждом компоненте добавьте простой текст, например, <h1>Главная страница</h1> для HomePage и <h1>О нас</h1> для AboutPage.
// Реализовать переходы

function HomePage() {
    return ( 
        <>
        <h1>Главная страница</h1>
        <Link to="/about">О нас</Link>
        </>
     );
}

export default HomePage;