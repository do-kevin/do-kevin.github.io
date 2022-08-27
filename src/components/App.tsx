import React from 'react';

export const App = (props) => {
  const { children } = props;
  return <div className="App w-screen h-screen">{children}</div>;
};
