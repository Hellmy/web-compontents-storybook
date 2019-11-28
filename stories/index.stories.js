import { withKnobs, text } from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/html';


export default {
  title: "Storybook Knobs",
  decorators: [withKnobs]
};

export const blab = () => {
  const value = text("foo", "foo");

  return `<my-component first=${value}></my-component>`;
}
  
  
  


storiesOf('Withs slots', module)
  .addDecorator(withKnobs)
  .add('knob', () => {
    var ele = document.createElement("my-component");
    ele.first= text("Name", "foo");
    return ele;
  } 
);
