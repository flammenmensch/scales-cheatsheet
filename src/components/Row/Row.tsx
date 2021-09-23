import React from 'react';

import './Row.scss';

const Row = (props: React.PropsWithChildren<unknown>) => (
  <div className="row">{props.children}</div>
);

export default Row;
