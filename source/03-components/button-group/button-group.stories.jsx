import parse from 'html-react-parser';

import twigTemplate from './button-group.twig';
import data from './button-group.yml';

const settings = {
  title: 'Components/ButtonGroup',
};

const Primary = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Primary.args = { ...data };

const Secondary = args => (
  parse(twigTemplate({
    ...args,
    button_modifier_classes: 'button--secondary',
  }))
);
Secondary.args = { ...data };

const Base = args => (
  parse(twigTemplate({
    ...args,
    button_modifier_classes: 'button--base',
  }))
);
Base.args = { ...data };

const Danger = args => (
  parse(twigTemplate({
    ...args,
    button_modifier_classes: 'button--danger',
  }))
);
Danger.args = { ...data };

const Small = args => (
  parse(twigTemplate({
    ...args,
    button_modifier_classes: 'button--small',
  }))
);
Small.args = { ...data };

const Large = args => (
  parse(twigTemplate({
    ...args,
    button_modifier_classes: 'button--large',
  }))
);
Large.args = { ...data };

export default settings;
export { Primary, Secondary, Base, Danger, Large, Small };