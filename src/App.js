import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Profile from "./pages/Profile";
import MessagePage from "./pages/MessagePage";
import Feed from "./pages/Feed";
import Navbar from "./components/navbar/Navbar";
import ProfileMenu from "./components/profileMenu/ProfileMenu";
import { useMediaQuery } from "@mui/material";
import {Setting} from "./pages/Setting"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLeftMenu, turnOffLeftMenu } from "./counter/CounterSlice";
import Esportree from "./pages/Esportree";
import Servers from "./pages/Servers";
import Stats from "./pages/Stats";
import Ranking from "./pages/Ranking";
import LeaderBoard from "./pages/Leaderboard";
import GamerParent from "./pages/GamerParent";
import Matches from "./pages/Matches";
function App() {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
 // const [open, setopen] = useState(false);
  const Layout = () => {
    const obj = useSelector(state=>state.CounterSliceReducer)
    const  [loading, setloading] = useState(false)
    useEffect(() => {

        window.onload=()=>{
          setloading(true)
          setTimeout(() => {
            setloading(false)
          }, 1500);
        }

    }, [])
    return (
      <>
        {loading?<Esportree/>:<Outlet />}
        
      </>
    );
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setopen((prev) => !prev);
  // };

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:'/test',
          element:<Esportree/>
        },
        {
          path: "/feed",
          element: <Feed/>,
          
        },
      
        {
          path: "/community",
          element: <MessagePage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
           path:"/servers",
           element:<Servers/>
        },
        {
          path: "/settings",
          element: <Setting />,
        },
        {
          path: "/stats",
          element: <Stats />,
        },
        {
          path: "/leaderboard",
          element: <LeaderBoard />,
        },
        {
          path: "/leaderboard",
          element: <LeaderBoard />,
        },
        {
          path:"/gamers",
          element:<GamerParent/>
        },{
          path:"/matches",
          element:<Matches />
        }
       
      ],
    },
  ]);

  const obj = useSelector(state=>state.CounterSliceReducer)
  const dispatch = useDispatch()
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
