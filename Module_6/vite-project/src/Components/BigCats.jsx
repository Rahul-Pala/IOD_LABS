import '../index.css'

function BigCats() {

const cats = [
  {id: 1, name: "Cheetah", latinName: "Acinonyx jubatus" },
  {id: 2, name: "Cougar", latinName: "Puma concolor" },
  {id: 3, name: "Jaguar", latinName: "Panthera onca" },
  {id: 4, name: "Leopard", latinName: "Panthera pardus" },
  {id: 6, name: "Lion", latinName: "Panthera leo" },
  {id: 7, name: "Snow leopard", latinName: "Panthera uncia" },
  {id: 8, name: "Tiger", latinName: "Panthera tigris" },
];

return(
  <div className="componentBox">
    <ul>
      {cats.map(cat => (
        <li key={cat.name}>{cat.name}</li>
      ))}
    </ul>
  </div>
)
}

export default BigCats

