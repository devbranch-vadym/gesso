import React from 'react';
import parse from 'html-react-parser';

import twigTemplate from './pager--mini.twig';
import data from './pager--mini.yml';

const settings = {
  title: 'Components/Pager/Mini Pager',
};

const MiniPager = args => (
  parse(twigTemplate({
    ...args,
  }))
);
MiniPager.args = { ...data };

export default settings;
export { MiniPager };
