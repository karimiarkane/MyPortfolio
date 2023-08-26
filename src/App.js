import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe"
import Services from "./Components/AboutMe/Services/Services";


function App() {
let header
 window.addEventListener("load",()=>{
  header =  document.querySelector('#header')
  const home = document.querySelector('.home')
  const options = {}
  
  
  const observer = new IntersectionObserver(function(entries , observer){
entries.forEach((entry)=>{
  if (!entry.isIntersecting){
  header.classList.add('slighter')
  }
  else{
    header.classList.remove('slighter')
  }
})
  },options)

observer.observe(home)

 }  )
 

  
  return (
    <>
      <Header></Header>
      <Home />
      <AboutMe/>
      <Services/>
      
      
    </>
  );
}

export default App;
