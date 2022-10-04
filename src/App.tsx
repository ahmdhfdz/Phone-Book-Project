import { Global, css } from '@emotion/react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import FormContactPage from './pages/FormContactPage';
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
        <Route path="/form-contact" element={<FormContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
