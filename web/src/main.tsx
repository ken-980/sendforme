import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { routes } from './routes'

// Third-party FlyonUI library configurations
import $ from 'jquery';
import _ from 'lodash';
import noUiSlider from 'nouislider';
import 'datatables.net';
import Dropzone from 'dropzone';

// Safely attach packages globally so FlyonUI's plugins can discover them instantly
if (typeof window !== 'undefined') {
  Object.assign(window, {
    $: $,
    jQuery: $,
    _: _,
    Dropzone: Dropzone,
    noUiSlider: noUiSlider
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
