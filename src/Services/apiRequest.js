import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ApiRequest =async (method,endpoint,jsonData,token) =>{
    try {
        let headers;
        const storedToken = await AsyncStorage.getItem("user-token");

        if(storedToken){
            headers = {
                'Content-Type':"application/json",
                Authorization:`${storedToken}`
            }
        }
        else{
            headers={
                'Content-Type':'application/josn'
            }
        }

        const config = {
            method,
            url:endpoint,
            data:jsonData,
            headers
        }

        const response = await axios(config);
        return response;
    } catch (error) {
        return response.error;
    }
}