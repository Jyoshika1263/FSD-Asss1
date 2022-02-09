
import penguin from './images/penguin.jpg';
function Welcome() {
    let share ="SHARE" ;
    let learn = "LEARN MORE" ;
    return (
        <center>
           <div className="border">
          <div className = "card"> 
                  
           <img src= {penguin} alt="..." />
          
           <h2 style = {{backgroundColor:"white" }}><b style = {{backgroundColor:"white" }}>PENGUIN</b></h2>
            <p style = {{backgroundColor:"white" }}> They live almost exclusively in the southern hemisphere only one species,the Galápagos penguin, is found north of the Equator. 
            </p>
            
            <br></br>
           <a style = {{backgroundColor:"white" }} href="">{share}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a style= {{backgroundColor:"white" }} href="">{learn}</a>
            
            
            </div>
            </div>
      </center>
      
    );
  }
  export default Welcome;