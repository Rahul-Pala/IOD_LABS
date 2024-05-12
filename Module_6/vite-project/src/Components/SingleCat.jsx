import BigCats from "./BigCats";

const Individualcat = cats.map(cat => ( 
    <cat
        key={cat.id} // key prop is required for lists
        name={cat.name} 
        latinName={cat.latinName}/>
      // can also destructure movie into individual props
      // <Movie key={movie.id} {...movie}/> 
    )
 );
 // separate component for displaying each movie
 function Movie({name, latinName,}) {
    return (
        {/* no key prop here - only at top level inside .map */}
    <div>
        <li> 
            <h3>{name}</h3> <span>({latinName})</span>
        </li>
     </div>
    )
 }


 