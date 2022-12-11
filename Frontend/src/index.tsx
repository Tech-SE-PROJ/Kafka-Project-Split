import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); //NOTE: Removed React.StrictMode below 
root.render(
  <App />
);
