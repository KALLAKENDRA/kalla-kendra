import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateResume from './components/CreateResume/CreateResume';
import Discover from './components/Discover/Discover';
import Home from './components/Home/Home';
import ImageInfo from './components/ImageInfo/ImageInfo';
import Jobs from './components/Jobs/Jobs';
import Livestreams from './components/Livestreams/Livestreams';
import ForgotPassword from './components/Login/ForgotPassword/ForgotPassword';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import StartYourJourny from './components/StartYourJourny/StartYourJourny';
import Upload from './components/Upload/Upload';
import UploadPhoto from './components/UploadPhoto/UploadPhoto';
import ViewDesignPage from './components/ViewDesignPage/ViewDesignPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forgotPass' element={<ForgotPassword />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/startyourjourny' element={<StartYourJourny />}></Route>
        <Route path='/discover' element={<Discover />}></Route>
        <Route path='/discover/modern-art' element={<ViewDesignPage />}></Route>
        <Route path='/createresume' element={<CreateResume />}></Route>
        <Route path='/upload' element={<Upload />}></Route>
        <Route path='/livestreams' element={<Livestreams />}></Route>
        <Route path='/jobs' element={<Jobs />}></Route>
        <Route path='/forgotPass' element={<ForgotPassword />}></Route>
        <Route path='/uploadphoto' element={<UploadPhoto />}></Route>
        <Route path='/viewdesignpage' element={<ViewDesignPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
