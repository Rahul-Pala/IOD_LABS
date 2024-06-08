import '../index.css'
import SingleCat from './SingleCat';
import { useState } from 'react';
import AddCatForm from './AddCatForm';

function BigCats() {


  const cats = [
    { id: 1, name: "Tiger", latinName: "Panthera tigris", image: "../Photos/image7.jpg" },
    { id: 2, name: "Cougar", latinName: "Puma concolor", image: "../Photos/image2.jpg" },
    { id: 3, name: "Jaguar", latinName: "Panthera onca", image: "../Photos/image3.jpg" },
    { id: 4, name: "Leopard", latinName: "Panthera pardus", image: "../Photos/image4.jpg" },
    { id: 6, name: "Lion", latinName: "Panthera leo", image: "../Photos/image5.jpg" },
    { id: 7, name: "Snow leopard", latinName: "Panthera uncia", image: "../Photos/image6.jpg" },
    { id: 8, name: "Cheetah", latinName: "Acinonyx jubatus", image: "../Photos/image1.jpg" },
  ];

  const [currentCats, setCurrentCats] = useState(cats);


return(
<>
 <div className="componentBox">
    <ul>
      {currentCats.map((cat,index) => (
      <SingleCat name={cat.name} latinName={cat.latinName} image={cat.image}></SingleCat>
      ))}
    </ul>
  </div>
  <div>
    <button onClick={() =>setCurrentCats([...cats].sort((cat1,cat2)=>cat1.name < cat2.name ? -1: 1))}>Sort Alphabetically</button>
    <button onClick={() =>setCurrentCats([...cats].reverse())}>Sort Reversing</button>
    <button onClick={() =>setCurrentCats([...cats].filter((latinName)=>latinName.startsWith('Panthera')))}>Filter</button>
  </div>

  <AddCatForm></AddCatForm>
</>
)
}


export default BigCats;
