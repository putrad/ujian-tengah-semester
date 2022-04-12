import react from "react"
import Card from "./components/card";
import Navbar from "./components/Navbar";



function App(props) {
  return (
    
  <div>
<Navbar/>
    
    <div className='py-4'>
<div className='container'>
  <div className='row'>
    <div className='col-md-4'>
      <Card contact={{
        imageurl:"https://media.suara.com/pictures/original/2021/12/28/98803-film-dear-nathan-thank-you-salma-instagramrapifilm.jpg",
        title:"poster",
        publish:"06 feb,3432",}}/>
        </div>
        <div className='col-md-4'>
      <Card contact={{
        imageurl:"https://assets.ladiestory.id/gallery/1637939916-dear-nathan-thankyou-salma-film.jpg",
        title:"poster",
        publish:"06 feb,3432",}}/>
        </div>
        <div className='col-md-4'>
      <Card contact={{
        imageurl:"https://www.jadwalnonton.com/data/images/movies/2019/ghost-writer-2437_300x450.jpg",
        title:"poster",
        publish:"06 feb,3432",}}/>
        </div>
  
  </div>
  <div className='row'>
    <div className='col-md-4'>
      <Card contact={{
        imageurl:"https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/03/01/1840533701.jpg",
        title:"poster",
        publish:"06 feb,3432",}}/>
        </div>
        <div className='col-md-4'>
      <Card contact={{
        imageurl:"https://s4.bukalapak.com/img/4314209492/large/entertainment_2014_06_the_giver_movie_poster_main.jpg",
        title:"poster",
        publish:"06 feb,3432",}}/>
        </div>
        <div className='col-md-4'>
      <Card contact={{
        imageurl:"https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjF1eDZGekNkR0wuX0FDX1NMMTI4MF8uanBn.jpg",
        title:"poster",
        publish:"06 jun,2010",}}/>
        </div>
  
  </div>

</div>
  


 </div>
  
  </div>
    
  )
}

export default App
