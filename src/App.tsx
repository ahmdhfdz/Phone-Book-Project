import { Global, css } from '@emotion/react'
import { Routes, Route } from "react-router-dom";
import ContactDetail from './components/ContactDetail';
import Header from './components/Header';
import FormContact from './pages/FormContact';
import ContactListPage from './pages/ContactListPage';


const App: React.FunctionComponent = () => {
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
      <Routes>
        <Route path="/" element={<ContactListPage />} />
        <Route path="/form-contact" element={<FormContact />} />
        <Route path="/contact-detail" element={<ContactDetail />} />
      </Routes>
    </div>
  );
}

export default App;
