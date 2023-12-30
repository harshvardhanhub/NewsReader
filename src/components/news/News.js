import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './News.css';

const News = () => {
  const [myNews, setMyNews] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/everything?q=bitcoin&apiKey=f817b67d1d9f4d33938ed9cc8e2fa23d'
      );
      const data = await response.json();
      setMyNews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode-on', !darkMode);
  };

  return (
    <div className={`news-container ${darkMode ? 'dark-mode-on' : ''}`}>
      <h1 className="news-heading">Daily Top Headlines</h1>
      <div className="dark-mode-toggle">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <span className={`dark-mode-label ${darkMode ? 'dark-mode-on' : ''}`}>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>
      <Tabs>
        <TabList>
          <Tab>Page 1</Tab>
          <Tab>Page 2</Tab>
          <Tab>Page 3</Tab>
          <Tab>Page 4</Tab>
          <Tab>Page 5</Tab>
          <Tab>Page 6</Tab>
          <Tab>Page 7</Tab>
          <Tab>Page 8</Tab>
          <Tab>Page 9</Tab>
          <Tab>Page 10</Tab>
          <Tab>Page 11</Tab>
          <Tab>Page 12</Tab>
        </TabList>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((pageNumber) => (
          <TabPanel key={pageNumber}>
            <div className="mainDiv">
              {myNews.slice((pageNumber - 1) * 4, pageNumber * 4).map((article, index) => (
                <div className="card" key={index}>
                  <img
                    src={article.urlToImage || 'https://via.placeholder.com/300'}
                    alt={article.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{article.author || 'Unknown Author'}</h5>
                    <p className="card-text">{article.title}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default News;
