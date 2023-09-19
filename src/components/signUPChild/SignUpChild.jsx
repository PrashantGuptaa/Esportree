import React, { useEffect, useState } from "react";
import styles from "./signup.module.css";
import CenterPopUp from "../centerPopUp/CenterPopUp";
import useCustomHook from "../../Customhooks/useCustomHook";

import {useNavigate} from "react-router-dom"
import { useMediaQuery } from "@mui/material";
import { getOTP, loginUser, registerFunct, verifyOTP } from "../../apiFolder/apiAuth";
import { getLocalItem, setLocalItem } from "../../localitems/localStorageChange";
const SignUpChild = () => {
  const { visible, setvisible, handleClose, isLoading, setisLoading } =
    useCustomHook();
  const [isSignIn, setIsSignIn] = useState(true);
  const [loginobj, setloginObj] = useState({
    email: "",
    password: "",
  });
  const [signupObj, setsignObj] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
  });
  const isNonMobileScreens = useMediaQuery("(min-width:600px)");
  const MaxWidth = useMediaQuery("(max-width:600px)");

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setsignObj((prev) => ({ ...prev, [name]: value }));
  };
  const handleChange2 = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setloginObj((prev) => ({ ...prev, [name]: value }));
  };
  const [errorP, seterrorP] = useState({
    num: 0, //neutral,
    //num 1 for success
    //num 2 for error
    message: "",
  });
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    //login
    setisLoading(true);
    const formData = new FormData();
    
    if (isSignIn) {
      if (loginobj.email === "" || loginobj.password === "") {
        
        seterrorP({
          num: 2,
          message: "All fields are required",
        });
      } else {
        const formData = new FormData()
        formData.append("email",loginobj.email)
        formData.append('password',loginobj.password)
        const res = await loginUser(formData)
        
       if (res.status === 201 || res.status===200) {
          seterrorP({
            num: 1,
            message: res.message,
          });
          setloginObj({
            email:"",
            password:""
          })
          e.target.reset()
          setLocalItem("token",res.data.token)
          setLocalItem("userInfo",res.data.infoData)
          navigate('/news')
        } else {
          
          seterrorP({
            num: 2,
            message: res.response.data.message,
          });
        }
      }
    } else {
      if (
        signupObj.email !== "" &&
        signupObj.name !== "" &&
        signupObj.password !== "" &&
        signupObj.userName !== ""
      ) {
        setvisible(true);
        if (signupObj.password.length < 8) {
          seterrorP({
            num: 2,
            message: "Minimum password length should be 8",
          });
          return;
        }

        formData.append("email", signupObj.email);
        formData.append("name", signupObj.name);
        formData.append("userName", signupObj.userName);
        formData.append("password", signupObj.password);

        const res = await registerFunct(formData);
        //console.log(res)
       if (res.status === 201) {
          seterrorP({
            num: 1,
            message: res.message,
          });
          setLocalItem("token", res.data.token);
          setsignObj({
            email:"",
            password:"",
            userName:"",
            name:""
          })
        } else {
          
          seterrorP({
            num: 2,
            message: res.response.data.message,
          });
        }
        setvisible(false)
      } else {
        seterrorP({
          num: 2,
          message: "All fields are required",
        });
      }
    }
   
    setisLoading(false);
  };
 
  useEffect(() => {
    setTimeout(() => {
      seterrorP({
        num: 0,
        message: "",
      });
    }, 3000);
  }, [errorP.num !== 0]);
  const handleGetOtp =async(e)=>{
    e.preventDefault()
    
    setisLoading(true);
    if(signupObj.email===""){
      seterrorP({
        num:2,
        message:"Enter your email to get OTP"
      })
      return
    }else{
      setvisible(true);
      const formData = new FormData()
      formData.append('email',signupObj.email)

      const res = await getOTP(formData,getLocalItem("token"))
      
       if (res.data.status === 201 || res.data.status===200) {
        seterrorP({
          num: 1,
          message: res.data.message,
        });
       
      } else {
        
        seterrorP({
          num: 2,
          message: res.data.response.data.message,
        });
      }
      setvisible(false);
    }
  
    setisLoading(false);
  }
  const sendOTPFunct=async(e,otpVal)=>{
    
    setisLoading(true)
  
     if(otpVal===""){
       return ;
     }else{
      setvisible(true)
        const formData = new FormData()
        formData.append("otp",otpVal)
        const token = getLocalItem("token")
        if(token===null){
          seterrorP({
            num: 2,
            message: "Token expired",
          });
          return 
        }
        const res = await verifyOTP(formData,token)
        
        if(res.code !==undefined || res.code!==null){
          seterrorP({
            num: 2,
            message: res.response.data.message,
          });
          
        } else
       
        if (res.data.status === 201 || res.data.status===200) {
          seterrorP({
            num: 1,
            message: res.data.message,
          });
         setLocalItem("token",null)
        } else {
          
          seterrorP({
            num: 2,
            message: "dont knw",
          });
        } 
     }
     setvisible(false)
     setisLoading(false)
    
  }
  return (
    <div
      className={`${styles.container} ${
        isSignIn ? "" : `${styles.rightPanelActive}`
      }`}

      id="container"
    >
      <div
        className={` ${styles.formContainer} ${
          isSignIn ? `${styles.signInContainer}` : `${styles.signUpContainer} `
        }`}
      >
        <form onSubmit={handleSubmit} className="">
          <h1 className={`${styles.h1Class}`}>
            {isSignIn ? `Sign in` : "Create Account"}
          </h1>
          <div className={`${styles.sliderContainer}`}>
            <div className={`${styles.sliderButton}`}>
              <div
                className={`${styles.sliderOption} ${
                  isSignIn ? `${styles.active}` : ""
                }`}
                onClick={toggleForm}
              >
                Sign in
              </div>
              <div
                className={`${styles.sliderOption} ${
                  !isSignIn ? `${styles.active}` : ""
                }`}
                onClick={toggleForm}
              >
                Register
              </div>
            </div>
          </div>
          {/*  <div className={`${styles.socialContainer}`}>
          <a href="#" className={`${styles.social} ${styles.aClass}`}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#"  className={`${styles.social} ${styles.aClass}`}>
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#"  className={`${styles.social} ${styles.aClass}`}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div> */}
          {/* <span className={`${styles.spanClass}`}>{isSignIn ? 'or use your account' : 'or use your email for registration'}</span> */}
          {isSignIn ? (
            <div className="mt-[15px]">
              <input
                type="email"
                name="email"
                
                defaultValue={loginobj.email}
                placeholder="Email"
                onChange={handleChange2}
              />
              <input
                type="password"
                name="password"
                
                defaultValue={loginobj.password}
                placeholder="Password"
                onChange={handleChange2}
              />
              <div
                className={`h-[30px] w-[100%] flex items-center text-[14px] font-semibold FourFifty:text-[15px] justify-center ${
                  errorP.num === 1
                    ? "text-[green]"
                    : errorP.num === 2
                    ? "text-[red]"
                    : ""
                }`}
              >
                {errorP.message}
              </div>
              <a href="#" className={`${styles.aClass}`}>
                Forgot your password?
              </a>
            </div>
          ) : (
            <div className="mt-[15px]">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                defaultValue={signupObj.name}
                placeholder="Name"
              />
              <input
                type="text"
                name="userName"
                onChange={handleChange}
                defaultValue={signupObj.userName}
                placeholder="Username"
              />
              <input
                type="email"
                name="email"
                defaultValue={signupObj.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                defaultValue={signupObj.password}
                placeholder="Password"
                onChange={handleChange}
              />

              <div
                className={`h-[30px] w-[100%] flex items-center mb-[10px] text-[14px] font-semibold FourFifty:text-[15px] justify-center ${
                  errorP.num === 1
                    ? "text-[green]"
                    : errorP.num === 2
                    ? "text-[red]"
                    : ""
                }`}
              >
                {errorP.message}
              </div>
              <div className="flex justify-between flex-row  w-[100%] mb-[10px]">
                <button className={`bg-[#3843b5] w-fit h-fit text-[15px] text-[white] p-[10px] rounded-full`} onClick={
                  e=>{
                  e.preventDefault()
                  setvisible(true)
                }}>
                  Verify OTP
                </button>
                <button className={`bg-[#3843b5] w-fit h-fit text-[15px] text-[white] p-[10px] rounded-full`} onClick={e=>handleGetOtp(e)}>
                  GET OTP
                </button>
              </div>
            </div>
          )}

          <button className={`${styles.buttonClass}`}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
      {isNonMobileScreens ? (
        <div className={`${styles.overlayContainer}`}>
          <div className={styles.overlay}>
            <div
              className={`${styles.overlayPanel} ${styles.overlayLeft} ${
                isSignIn ? `${styles.overlayActive}` : ""
              }`}
            >
              <h1 className={`${styles.h1Class}`}>Welcome Back!</h1>
              <p className={`${styles.pClass}`}>
                To keep connected with us please login with your personal info
              </p>

              <button
                className={`${styles.ghost} ${styles.buttonClass}`}
                onClick={toggleForm}
              >
                Sign Up
              </button>
            </div>
            <div
              className={`${styles.overlayPanel} ${styles.overlayRight} ${
                !isSignIn ? `${styles.overlayActive}` : ""
              }`}
            >
              <h1 className={`${styles.h1Class}`}>Hello, Friend!</h1>
              <p className={`${styles.pClass}`}>
                Enter your personal details and start your journey with us
              </p>
              <button
                className={`${styles.ghost} ${styles.buttonClass}`}
                onClick={toggleForm}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <CenterPopUp
        onClose={handleClose}
        visible={visible}
        num={1}
        handleOTP={sendOTPFunct}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SignUpChild;
