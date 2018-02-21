import React from 'react';
import DataApi from 'state-api';
import axios from 'axios';

import ArticleList from './ArticleList';

class App extends React.Component {
  state = {
    articles: {},
    authors: {}
  }

  async componentDidMount(){
    const response = await axios.get('/data');
    const api = new DataApi(response.data);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };

  render () {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
