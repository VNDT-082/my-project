
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import store from './redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';
import { NotificationProvider } from './components/context/NotificationContext';


function App() {


  const [notifyValue, setNotifyValue] = useState<string>('');
  const [notifyStyle, setNotifytyle] = useState<'sucess' | 'warning' | 'error'>('sucess');
  const showNotification = (msg: string) => {
    toast(msg);
  };



  return (
    <NotificationProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route component={NotFound} /> */}
          </Routes>
        </Router>
        <ToastContainer />
      </Provider >
    </NotificationProvider>



  );
}

export default App;
