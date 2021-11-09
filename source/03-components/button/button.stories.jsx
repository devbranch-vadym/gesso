import React from 'react';
import parse from 'html-react-parser';

import twigTemplate from './button.twig';
import data from './button.yml';

const settings = {
  title: 'Components/Button',
};

const Primary = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Primary.args = { ...data };

const Danger = args => (
  parse(twigTemplate({
    ...args,
    modifier_classes: 'button--danger',
  }))
);
Danger.args = { ...data };

const Large = args => (
  parse(twigTemplate({
    ...args,
    modifier_classes: 'button--large',
  }))
);
Large.args = { ...data };

const Secondary = args => (
  parse(twigTemplate({
    ...args,
    modifier_classes: 'button--secondary',
  }))
);
Secondary.args = { ...data };

const Small = args => (
  parse(twigTemplate({
    ...args,
    modifier_classes: 'button--small',
  }))
);
Small.args = { ...data };

export default settings;
export { Primary, Danger, Large, Secondary, Small };