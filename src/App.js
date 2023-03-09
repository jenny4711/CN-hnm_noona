import {Routes,Route} from "react-router-dom"
import './App.css';
import {useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './Navbar';
import PrivateRoute from './route/PrivateRoute';

// 1.전체상품페이지, 로인, 상품상세페이지
// 1-1 navbar
// 2.전체상품페이지-전체 상품볼수있다.
// 3.로그인 버튼을 누면 로인 페지 나온다
// 3-1.상품디테일을 눌렀으나, 로그인 이  안되었을경우 로그인 페이지 넘어간다
// 4.로그인이 되어있을경우 에  상품디테일 페이지를 볼있다.
// 5.로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 5-1.로그아웃이되면 상품 디테일페이지를 볼없다. 다 로그인 페이지가 보인다.
// 6.로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 7.상품을 검색할수있다. 
function App() {
const [authen,setAuthen]=useState(false)
useEffect(()=>{
  console.log(authen,'ccccc')
},[authen])
  return (
    <div className="App">
      
      <Navbar authen={authen} setAuthen={setAuthen}/>
      <Routes>
        <Route path='/'element={<ProductAll/>}/>
        <Route path='/login'element={<Login setAuthen={setAuthen}/>}/>
        <Route path='/product/:id'element={<PrivateRoute authen={authen}/>}/>
      </Routes>
    </div>
  );
}

export default App;
