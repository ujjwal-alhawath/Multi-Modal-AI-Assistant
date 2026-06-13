import { prevUser } from "./context/UserContext";

const Api_Url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`;

export async function generateResponse() {
    let parts = [{"text": prevUser.prompt}];
    if (prevUser.data) {
        parts.push({
            "inline_data": {
                "mime_type": prevUser.mime_type,
                "data": prevUser.data
            }
        });
    }

    let RequestOption={
       method:"POST",
       headers:{'Content-Type' : 'application/json'},
       body:JSON.stringify({
         "contents": [{
           "parts": parts
         }]
       })
    }
    try{
    let response=await fetch(Api_Url,RequestOption)
    let data=await response.json()
    let apiResponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()
    return apiResponse
    
    }
    catch (error) {
        console.error("Error generating response:", error);
    }
}