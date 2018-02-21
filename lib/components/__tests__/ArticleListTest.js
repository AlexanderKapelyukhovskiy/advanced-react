import React from 'react';
import ArticleList from 'components/ArticleList';
import Article from 'components/Article';
import 'babel-polyfill';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

Article.propTypes = {};

describe('ArticleList',() =>{
  const testProps = {
    articles: {
      a: {id: 'a',},
      b: {id: 'b'}
    }
  };

  it('renders correctly', ()=>{
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    expect(wrapper.getElement().props.children.length).toBe(2);
    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
