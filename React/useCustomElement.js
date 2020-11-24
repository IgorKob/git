// https://github.com/the-road-to-learn-react/use-custom-element
// npm install use-custom-element
import React from 'react';
 
import 'road-dropdown';
 
import useCustomElement from 'use-custom-element';
 
const Dropdown = props => {
  const [customElementProps, ref] = useCustomElement(props);
 
  return <road-dropdown {...customElementProps} ref={ref} />;
};