import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";
import { useEffect } from "react";


export const Home = () => {
  
 async function requestPermission(){
    const permission=await Notification.requestPermission();
    if(permission === 'granted'){
      //generate token
      const token =await getToken(messaging,{vapidKey:'BOKWY541OSF7D_FK1jpNJX9J7Yv67ozPf2MaZWCQWmYKpjPDtak8NVgh-ecwcqpdgD00joPDyw1cbFKIsHlzXBw'});
      console.log('token :',token);
    }
    else if(permission === 'denied'){
    alert('You denied the notification');
    }
  }

    useEffect(()=>{
    console.log('first');
    requestPermission();
  },[]);

  return <div>
   Home
   <button>Send</button>
    </div>;
};
