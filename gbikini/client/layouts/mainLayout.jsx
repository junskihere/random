import React from 'react';

export const MainLayout = ({header, content, footer}) => (
  <div>
      {header}
      <div className="container">
        {content}
      </div>
      {footer}
  </div>
);
