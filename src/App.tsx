import { Global, css } from '@emotion/react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import FormContactPage from './pages/FormContactPage';
import ContactListPage from './pages/ContactListPage';
import { AppProvider } from './hooks/FavoriteContext';


const App: React.FC = () => {
  return (
    <div>
      <Global styles={
        css`
        body{
          background-color: #efcb48;
        }
        @font-face {
          font-family: 'Montserrat', sans-serif;
          font-family: 'Noto Sans', sans-serif;
          font-family: 'Silkscreen', cursive;
        }
        `
      } />
      <Header />
      <AppProvider>
        <Routes>
          <Route path="/" element={<ContactListPage />} />
          <Route path="/form-contact" element={<FormContactPage />} />
        </Routes>
      </AppProvider>

    </div>
  );
}

export default App;
