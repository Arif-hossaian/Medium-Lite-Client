import React from 'react';
import { useParams } from 'react-router';
import NotFound from './components/NotFound-page/NotFound';
import { IParams } from './utils/Typscript';

const generatePage = (name: string) => {
  const component = () => require(`./pages/${name}`).default;
  try {
    return React.createElement(component());
  } catch (error) {
    return <NotFound />;
  }
};

const PageRender = () => {
  const { page, slug }: IParams = useParams();
  let name = '';
  if (page) {
    name = slug ? `${page}/[slug]` : `${page}`;
  }
  return generatePage(name);
};

export default PageRender;
