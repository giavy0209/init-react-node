import callAPI from "callAPI";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    callAPI.get('/')
    .then(res => {
      console.log(res?.);
      
    })
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
