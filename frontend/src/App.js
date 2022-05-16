import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./component/Header/Header.jsx"
import Login from  "./component/Login/Login.jsx"
import {useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {loadUser} from "./Actions/User"
import Home from "./component/Home/Home.jsx"
import Account from './component/Account/Account';
import NewPost from './component/NewPost/NewPost';
import Register from './component/Register/Register';
import UpdateProfile from './component/UpdateProfile/UpdateProfile';
import UpdatePassword from './component/UpdatePassword/UpdatePassword';
import ForgotPassword from './component/ForgotPassword/ForgotPassword';
import ResetPassword from './component/ResetPassword/ResetPassword';
import UserProfile from './component/UserProfile/UserProfile';
import Search from './component/Search/Search';
import NotFound from './component/NotFound/NotFound';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  },[dispatch]);

  const {isAuthenticated} = useSelector((state) => state.user);
  return (
    <Router>
    {isAuthenticated && <Header/>}
    <Routes>
      <Route path="/" element={isAuthenticated ? <Home/>:<Login/>}/>
      <Route path="/account" element={isAuthenticated ? <Account/>:<Login/>}/>
      <Route path="/newpost" element={isAuthenticated ? <NewPost/>:<Login/>}/>
      <Route path="/register" element={isAuthenticated ? <Account/>:<Register/>}/>
      <Route path="/update/profile" element={isAuthenticated ? <UpdateProfile/>:<Login/>}/>
      <Route path="/update/password" element={isAuthenticated ? <UpdatePassword/>:<Login/>}/>
      <Route path="/update/password" element={isAuthenticated ? <UpdatePassword/>:<Login/>}/>
      <Route path="/forgot/password" element={isAuthenticated ? <UpdatePassword/>:<ForgotPassword/>}/>
      <Route path="/password/reset/:token" element={isAuthenticated ? <UpdatePassword/>:<ResetPassword/>}/>
      <Route path="/user/:id" element={isAuthenticated ? <UserProfile/>:<Login/>}/>
      <Route path="search" element={isAuthenticated ?<Search/>:<Login/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
 