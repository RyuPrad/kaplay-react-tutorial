import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactUI from './ReactUI.jsx'
import initGame from "./initGame.js"
import { Provider } from "jotai"
import { store } from "./store.js"

const ui = document.getElementById('ui');

new ResizeObserver(() => {
  document.documentElement.style.setProperty(
    "--scale",
    Math.min(
      ui.parentElement.offsetWidth / ui.offsetWidth,
      ui.parentElement.offsetHeight / ui.offsetHeight
    )
  );
}).observe(ui.parentElement);

createRoot(ui).render(
  <StrictMode>
    <Provider store={store}>
      <ReactUI/>
    </Provider>
  </StrictMode>,
);

initGame();
