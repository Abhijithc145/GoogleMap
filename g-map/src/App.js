import React,{useEffect,useState} from 'react'
import { GoogleMap,useJsApiLoader,Marker} from '@react-google-maps/api';



function App() {
 

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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
          zoom={5}
          >
         
      
         <Marker  key={Math.random()} title={'drag to move'} position={{ lat: 14.756795, lng: 76.954298 }}/>
         <Marker  key={Math.random()} title={'drag to move'} position={{ lat: 14.756795, lng: 77.954298 }}/>
             
               
                
               
        </GoogleMap>}
    </div>
  );
}

export default App;
