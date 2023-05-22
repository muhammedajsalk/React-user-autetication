import React,{useState,useEffect} from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Places from "./components/screens/Places"; 
import Place from "./components/screens/Place"; 
import NotFound from "./components/screens/NotFound"; 
import Login from "./components/screens/Login"; 
import Signup from "./components/screens/Signup"; 

export const UserContext=React.createContext();

function App(props) { 
    const [userData,setUserData]=useState({});
    const updateUserData=(action)=>{
       switch(action.type){
        case "LOGOUT":
          setUserData(null);
          localStorage.clear();
          break;
        default:
          break;
       }
    };
    useEffect(()=>{
      setUserData(JSON.parse(localStorage.getItem("user_data")));
    },[])
    return ( 
       <div> 
        <UserContext.Provider value={{userData,updateUserData}}>
          <Router>
                <Routes>
                    <Route path="/" element={<Places />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/create" element={<Signup />} />
                    <Route path="/place/:id" element={<Place />} /> <Route path="*" element={<NotFound />} />
                </Routes> 
          </Router> 
        </UserContext.Provider>
      </div> 
    ); 
} 

export default App;