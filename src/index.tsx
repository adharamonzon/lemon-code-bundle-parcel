import React from 'react';
import { createRoot } from 'react-dom/client';
import { InfoComponent } from './infoComponent';
import './styles.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className="pageTitle">¡Bienvenid@ a parcel!</h1>
    <InfoComponent />
  </div>
);