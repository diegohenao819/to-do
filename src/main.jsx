
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStateProvider } from "./components/GlobalStateContext";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>
);
