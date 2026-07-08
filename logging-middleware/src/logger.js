import { API_URL } from "./constants";

export async function Log(stack, level, packageName, message) {
    try {
        const response = await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                stack,
                level,
                package:packageName,
                message
            })
        });

        return await response.json();

    } catch(error){

        console.error("Logging Failed",error);
    }
}