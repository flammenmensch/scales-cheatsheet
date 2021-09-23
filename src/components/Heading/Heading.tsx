import React from 'react';
import './Heading.scss';

interface Props {
  text: string;
}

const Heading = (props: Props) => <h1 className="heading">{props.text}</h1>;

export default Heading;
