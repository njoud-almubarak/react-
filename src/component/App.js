import './App.css';
import MyCats from './cat';


function App() {
  return (
    <div className='App'>
     <h1> cat store </h1>
    
<div className="cat-cont">
    <MyCats
    image={"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=600"}
    name={"losy"}
    age={2}/>

<MyCats
    image={"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600"}
    name={"snow"}
    age={2}/>


<MyCats
    image={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.purina.co.nz%2Fsites%2Fdefault%2Ffiles%2F2020-12%2FYour-Cats-Age-in-Human-YearsTEASER.jpg&imgrefurl=https%3A%2F%2Fwww.purina.co.nz%2Farticles%2Fcats%2Fsenior%2Fcare%2Fcats-age-in-human-years&tbnid=b7RrWekutR1Z3M&vet=10CAUQxiAoA2oXChMI8P_5mOq8-AIVAAAAAB0AAAAAEBQ..i&docid=gOc615ZpX5RyzM&w=1080&h=608&itg=1&q=cat%20image&ved=0CAUQxiAoA2oXChMI8P_5mOq8-AIVAAAAAB0AAAAAEBQ"}
    name={"hidi"}
    age={1}/>


<MyCats
    image={"https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600"}
    name={"softy"}
    age={5}/>

</div>
    </div>
  );
};



export default App;