import React,{useEffect,useState} from 'react'
import { GoogleMap,useJsApiLoader} from '@react-google-maps/api';



function App() {
 

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:"AIzaSyBlg2ZY305ZzwA6hqUmuarY5SK8FUtTPIM",
    })                     // The google map api key is connected


    const containerStyle = {
      width: '100%',
      height: '500px'
    };
    
    const center = {
      lat: 9.745,
      lng: 76.523
    };                          // The style of Map 
   


  return (
    <div >

  {   isLoaded &&  <GoogleMap
         mapContainerStyle={containerStyle}
          center={{ lat: 10.8505, lng: 76.2711 }}
          zoom={7}
          >
         
      
              
             
               
                
               
        </GoogleMap>}
    </div>
  );
}

export default App;
