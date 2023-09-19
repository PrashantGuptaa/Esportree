import axios from "axios"
const mid="auth"
export const registerFunct=async(data)=>{
    const url = process.env.REACT_APP_backendBase+ mid + "/signup"
    
    try {
        const res = await axios({
            method:'POST',
            url,
            data,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }) 
        return res.data
    } catch (error) {
     
        return error
    }
}
export const getOTP = async(data,token)=>{
    const url = process.env.REACT_APP_backendBase+mid +"/send-verification-code"
    
    try {
        const res = await axios({
            method:'POST',
            url,
            data,
            headers:{
                'authorization':'Bearer '+token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }) 
        return res
    } catch (error) {
        console.log(error)
        return error        
    }
}
export const verifyOTP = async(data,token)=>{

    try {
        const res  = await axios({
            method:'POST',
            url :process.env.REACT_APP_backendBase + mid+"/verify-code",
            data,
            headers:{
                'authorization':'Bearer '+token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        })
        
        return res
    } catch (error) {
        return error
    }
}
export const loginUser = async(data)=>{
    try {
        const res = await axios({
            method:'POST',
            url:process.env.REACT_APP_backendBase+mid+"/login",
            data,
            headers:{
                
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        })
        return res.data
    } catch (error) {
        return error        
    }
}