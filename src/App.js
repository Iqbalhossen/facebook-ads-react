
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomeMain from './Layout/Home/HomeMain';
import AdminMain from './Layout/Admin/AdminMain';
import Home from './Commponets/Home/Home';
import Dashboard from './Commponets/Admin/Dashboard';
import Category from './Commponets/Admin/Category/category';
import Manager from './Commponets/Admin/Role/Manager/Manager';
import Login from './Auth/Login';
import Register from './Auth/Register';
import AdminPrivateRoute from './Route/AdminPrivateRoute';
import UserMain from './Layout/User/UserMain';
import UserDashboard from './Commponets/User/UserDashboard';
import UserPrivateRoute from './Route/UserPrivateRoute';
import Pages from './Commponets/User/Pages/Pages/Pages';
import EditPages from './Commponets/User/Pages/Pages/EditPages';
import AdsRequest from './Commponets/User/AdsRequest/AdsRequest';
import StoreAdsRequest from './Commponets/User/AdsRequest/StoreAdsRequest';
import LoginRoute from './Route/LoginRoute';
import AdsManager from './Commponets/User/AdsManager/AdsManager';
import AddAds from './Commponets/User/AdsManager/AddAds';
import Amounts from './Commponets/Admin/Amounts/Amounts';
import EditProfile from './Commponets/User/Profile/EditProfile';
import PasswordChange from './Commponets/User/Profile/PasswordChange';
import AddManager from './Commponets/Admin/Role/Manager/AddManager';
import Staff from './Commponets/Admin/Role/Staff/Staff';
import AddStaff from './Commponets/Admin/Role/Staff/AddStaff';
import StaffPrivateRoute from './Route/StaffPrivateRoute';
import ManagerPrivateRoute from './Route/ManagerPrivateRoute';
import MainManager from './Layout/Manager/MainManager';
import ManagerDashboard from './Layout/Manager/ManagerDashboard';
import MainStaff from './Layout/Staff/MainStaff';
import StaffDashboard from './Layout/Staff/StaffDashboard';
import AdminAdsRequest from './Commponets/Admin/AdsRequests/AdsRequest';
import AcceptAdsRequest from './Commponets/User/AcceptAdsRequest/AcceptAdsRequest';
import RejectAdsRequest from './Commponets/User/RejectAdsRequest/RejectAdsRequest';
import Payment from './Commponets/Admin/RequestPayment/Payment';
import UserPayment from './Commponets/User/UserPayment/UserPayment';
import AdsRequestManager from './Commponets/User/AdsRequest/AdsManager/AdsRequestManager';
import Proccessing from './Commponets/Admin/ProccessingAds/Proccessing';
import ViewProccessing from './Commponets/Admin/ProccessingAds/ViewProccessing';
import ViewPayment from './Commponets/Admin/RequestPayment/ViewPayment';
import DoneAds from './Commponets/Admin/DoneAds/DoneAds';
import ViewAds from './Commponets/Admin/DoneAds/ViewAds';
import AllAdsManager from './Commponets/Admin/AdsManager/AllAdsManager/AllAdsManager';
import ViewAdsManager from './Commponets/Admin/AdsManager/AllAdsManager/ViewAdsManager';
import ProccessingAdsManager from './Commponets/Admin/AdsManager/ProccessingAdsManager/ProccessingAdsManager';
import ViewProccessingAdsManager from './Commponets/Admin/AdsManager/ProccessingAdsManager/ViewProccessingAdsManager';
import DoneAdsManager from './Commponets/Admin/AdsManager/DoneAdsManager/DoneAdsManager';
import ViewDoneAdsManager from './Commponets/Admin/AdsManager/DoneAdsManager/ViewDoneAdsManager';
import Accounts from './Commponets/User/Accounts/Accounts';
import Requests from './Commponets/User/Requests/Requests';
import AccountsRequests from './Commponets/Admin/AccountsRequests/AccountsRequests';
import AssignAccounts from './Commponets/Admin/AccountsRequests/AssignAccounts';
import CreditRequests from './Commponets/User/CreditRequest/CreditRequests';
import AddCredit from './Commponets/User/Credit/AddCredit';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeMain></HomeMain>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/Blog',
          element: <h1>Blog</h1>
        },
        {
          path: '/login',
          element: <LoginRoute><Login></Login></LoginRoute>
        },
        {
          path: '/register',
          element: <LoginRoute><Register></Register></LoginRoute>
        },
        {
          path: '*',
          element: <h1>404</h1>
        },
      ],

    },
    // Admin Section Start -----------------------------------------------------
    {
      path: '/admin',
      element: <AdminPrivateRoute> <AdminMain></AdminMain></AdminPrivateRoute>,
      children: [
        {
          path: '/admin/dashboard',
          element: <AdminPrivateRoute><Dashboard></Dashboard></AdminPrivateRoute>
        },
        {
          path: '/admin/Category',
          element: <AdminPrivateRoute><Category></Category></AdminPrivateRoute>
        },
        {
          path: '/admin/amounts',
          element: <AdminPrivateRoute><Amounts></Amounts></AdminPrivateRoute>
        },
        {
          path: '/admin/manager/view',
          element: <AdminPrivateRoute><Manager></Manager></AdminPrivateRoute>
        },
        {
          path: '/admin/manager/add',
          element: <AdminPrivateRoute><AddManager></AddManager></AdminPrivateRoute>
        },
        {
          path: '/admin/staff/view',
          element: <AdminPrivateRoute><Staff></Staff></AdminPrivateRoute>
        },
        {
          path: '/admin/staff/add',
          element: <AdminPrivateRoute><AddStaff></AddStaff></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/request',
          element: <AdminPrivateRoute><AdminAdsRequest></AdminAdsRequest></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/request/payment',
          element: <AdminPrivateRoute><Payment></Payment></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/request/proccesing',
          element: <AdminPrivateRoute><Proccessing></Proccessing></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/request/done',
          element: <AdminPrivateRoute><DoneAds></DoneAds></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/request/done/view/:id',
          element: <AdminPrivateRoute><ViewAds></ViewAds></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/proccessing/:id',
          element: <AdminPrivateRoute><ViewProccessing></ViewProccessing></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/payment/:id',
          element: <AdminPrivateRoute><ViewPayment></ViewPayment></AdminPrivateRoute>
        },
        {
          path: '/admin/all/ads/manager',
          element: <AdminPrivateRoute><AllAdsManager></AllAdsManager></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/manager/view/:id',
          element: <AdminPrivateRoute><ViewAdsManager></ViewAdsManager></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/manager/proccesing',
          element: <AdminPrivateRoute><ProccessingAdsManager></ProccessingAdsManager></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/manager/proccesing/view/:id',
          element: <AdminPrivateRoute><ViewProccessingAdsManager></ViewProccessingAdsManager></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/manager/complete',
          element: <AdminPrivateRoute><DoneAdsManager></DoneAdsManager></AdminPrivateRoute>
        },
        {
          path: '/admin/ads/manager/complete/view/:id',
          element: <AdminPrivateRoute><ViewDoneAdsManager></ViewDoneAdsManager></AdminPrivateRoute>
        },
        {
          path: '/admin/accounts/request',
          element: <AdminPrivateRoute><AccountsRequests></AccountsRequests></AdminPrivateRoute>
        },
        {
          path: '/admin/accounts/assign/:id',
          element: <AdminPrivateRoute><AssignAccounts></AssignAccounts></AdminPrivateRoute>
        },


      ],

    },
    // Admin Section End -----------------------------------------------------

    // user Section Start -----------------------------------------------------
    {
      path: '/user',
      element: <UserPrivateRoute> <UserMain></UserMain></UserPrivateRoute>,
      children: [
        {
          path: '/user/dashboard',
          element: <UserPrivateRoute><UserDashboard></UserDashboard></UserPrivateRoute>
        },
        {
          path: '/user/pages/view',
          element: <UserPrivateRoute><Pages></Pages></UserPrivateRoute>
        },
        {
          path: '/user/page/edit/:id',
          element: <UserPrivateRoute><EditPages></EditPages></UserPrivateRoute>
        },
        {
          path: '/user/ads/request/view',
          element: <UserPrivateRoute><AdsRequest></AdsRequest></UserPrivateRoute>
        },
        {
          path: '/user/ads/request',
          element: <UserPrivateRoute><StoreAdsRequest></StoreAdsRequest></UserPrivateRoute>
        },
        {
          path: '/user/ads/manager',
          element: <UserPrivateRoute><AdsManager></AdsManager></UserPrivateRoute>
        },
        {
          path: '/user/ads/add',
          element: <UserPrivateRoute><AddAds></AddAds></UserPrivateRoute>
        },
        {
          path: '/user/profile/edit',
          element: <UserPrivateRoute><EditProfile></EditProfile></UserPrivateRoute>
        },
        {
          path: '/user/password/change',
          element: <UserPrivateRoute><PasswordChange></PasswordChange></UserPrivateRoute>
        },
        {
          path: '/user/accept/request',
          element: <UserPrivateRoute><AcceptAdsRequest></AcceptAdsRequest></UserPrivateRoute>
        },
        {
          path: '/user/reject/request',
          element: <UserPrivateRoute><RejectAdsRequest></RejectAdsRequest></UserPrivateRoute>
        },
        {
          path: '/user/ads/request/payment/:id',
          element: <UserPrivateRoute><UserPayment></UserPayment></UserPrivateRoute>
        },
        {
          path: '/user/ads/request/manager',
          element: <UserPrivateRoute><AdsRequestManager></AdsRequestManager></UserPrivateRoute>
        },
        {
          path: '/user/accounts',
          element: <UserPrivateRoute><Accounts></Accounts></UserPrivateRoute>
        },
        {
          path: '/user/requests',
          element: <UserPrivateRoute><Requests></Requests></UserPrivateRoute>
        },
        {
          path: '/user/credit/request/:accountId/:id',
          element: <UserPrivateRoute><CreditRequests></CreditRequests></UserPrivateRoute>
        },
        {
          path: '/user/add/credit/:accounts/:id',
          element: <UserPrivateRoute><AddCredit></AddCredit></UserPrivateRoute>
        },



      ],

    },
    // user Section End -----------------------------------------------------


    // Manager Section Start -----------------------------------------------------
    {
      path: '/manager',
      element: <ManagerPrivateRoute> <MainManager></MainManager></ManagerPrivateRoute>,
      children: [
        {
          path: '/manager/dashboard',
          element: <ManagerPrivateRoute><ManagerDashboard></ManagerDashboard></ManagerPrivateRoute>
        },


      ],

    },
    // Manager Section End -----------------------------------------------------

    // Staff Section Start -----------------------------------------------------
    {
      path: '/staff',
      element: <StaffPrivateRoute> <MainStaff></MainStaff></StaffPrivateRoute>,
      children: [
        {
          path: '/staff/dashboard',
          element: <StaffPrivateRoute><StaffDashboard></StaffDashboard></StaffPrivateRoute>
        },


      ],

    },
    // Manager Section End -----------------------------------------------------


  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>

  );
}

export default App;
