import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import FarmerHome from './Farmer/FarmerHome';
import FarmerLogin from './Farmer/FarmerLogin';
import FarmerRegister from './Farmer/FarmerRegister';
import AdminHome from './Admin/AdminHome';
import Experts from './Admin/Experts';
import AddExpert from './Admin/AddExpert';
import EditExpert from './Admin/EditExpert';
import ExpertLogin from './Expert/ExpertLogin';
import ExpertProducts from './Expert/ExpertProducts';
import FarmerProducts from './Farmer/FarmerProducts';
import AddProducts from './Farmer/AddProducts';
import BuyerRegister from './Buyer/BuyerRegister';
import BuyerLogin from './Buyer/BuyerLogin';
import BuyerHome from './Buyer/BuyerHome';
import BuyerProducts from './Buyer/BuyerProducts';
import Cart from './Buyer/Cart';
import Orders from './Buyer/Orders';
import Payment from './Buyer/Payment';
import EditProduct from './Farmer/EditProduct';
import Profile from './Farmer/Profile';
import FarmerExperts from './Farmer/FarmerExperts';
import AskQuestion from './Farmer/AskQuestion';
import Questions from './Farmer/Questions';
import FarmerOrders from './Farmer/FarmerOrders';
import ExpertHome from './Expert/ExpertHome';
import ExpertQuestions from './Expert/ExpertQuestions';
import GiveAnswer from './Expert/GiveAnswer';
import AddNotification from './Admin/AddNotification';
import AddWarning from './Admin/AddWarning';
import Warnings from './Expert/Warnings';
import AdminBuyers from './Admin/AdminBuyers';
import EditBuyer from './Admin/EditBuyer';
import ExpertNotifications from './Expert/ExpertNotifications';
import FarmerNotifications from './Farmer/FarmerNotifications';
import BuyerNotifications from './Buyer/BuyerNotifications';

function App() {
  return (
    <div className='body'>
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/farmerhome' element={<FarmerHome/>}/>
          <Route path='/farmerlogin' element={<FarmerLogin/>}/>
          <Route path='/farmerregister' element={<FarmerRegister/>}/>
          <Route path='/adminhome' element={<AdminHome/>}/>
          <Route path='/experts' element={<Experts/>}/>
          <Route path='/addexpert' element={<AddExpert/>}/>
          <Route path='/editexpert/:email' element={<EditExpert/>}/>
          <Route path='/expertlogin' element={<ExpertLogin/>}/>
          <Route path='/expertproducts' element={<ExpertProducts/>}/>
          <Route path='/farmerproducts' element={<FarmerProducts/>}/>
          <Route path='/addproducts' element={<AddProducts/>}/>
          <Route path='/buyerregister' element={<BuyerRegister/>}/>
          <Route path='/buyerlogin' element={<BuyerLogin/>}/>
          <Route path='/buyerhome' element={<BuyerHome/>}/>
          <Route path='/buyerproducts' element={<BuyerProducts/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/editproduct/:id' element={<EditProduct/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/farmerexperts' element={<FarmerExperts/>}/>
          <Route path='/askquestion' element={<AskQuestion/>}/>
          <Route path='/questions' element={<Questions/>}/>
          <Route path='/farmerorders' element={<FarmerOrders/>}/>
          <Route path='/experthome' element={<ExpertHome/>}/>
          <Route path='/expertquestions' element={<ExpertQuestions/>}/>
          <Route path='/giveanswer/:id' element={<GiveAnswer/>}/>
          <Route path='/expertproducts' element={<ExpertProducts/>}/>
          <Route path='/addnotification' element={<AddNotification/>}/>
          <Route path='/addwarning' element={<AddWarning/>}/>
          <Route path='/warnings' element={<Warnings/>}/>
          <Route path='/adminbuyers' element={<AdminBuyers/>}/>
          <Route path='/editbuyer/:email' element={<EditBuyer/>}/>
          <Route path='/expertnotifications' element={<ExpertNotifications/>}/>
          <Route path='/farmernotifications' element={<FarmerNotifications/>}/>
          <Route path='/buyernotifications' element={<BuyerNotifications/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
