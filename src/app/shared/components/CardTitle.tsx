import React from 'react';

export const CardTitle = ({ children }: React.PropsWithChildren<{}>) => (
  <span className="card-title">
    { children }
  </span>
);
