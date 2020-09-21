import React, { Component } from 'react';
import './App.css';
import Articles from '../components/Articles/Articles';
import Header from '../components/Header/Header';

class App extends Component {

  state = {
    articles: [
      {id: "1", title: "title1", content: "This is content 1"},
      {id: "2", title: "title2", content: "This is content 2"},
      {id: "3", title: "title3", content: "This is content 3"},
      {id: "4", title: "title4", content: "This is content 4"}
    ],
    showArticles: false
  }

  toggleArticlesHandler = () => {
    const doesShow = this.state.showArticles;
    this.setState({showArticles: !doesShow});

  }

  deleteArticleHandler = (articleIndex) => {
    const articles = [...this.state.articles];
    articles.splice(articleIndex, 1);
    this.setState({articles: articles});
  }

  render(){
    
    let articles = null;
    if(this.state.showArticles) {
      articles = <Articles articles={this.state.articles} deleteArticle={this.deleteArticleHandler} />
    }
     
    return (
      <div className='App'>
        <Header showArticles={this.state.showArticles} toggleArticles={this.toggleArticlesHandler} />
        {articles}
      </div>
    );
  }
}

export default App;
