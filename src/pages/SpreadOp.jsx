import {useState} from 'react'

export default function SpreadOp() {

    const [tableau, setTableau] = useState([1, 2, 3])

    const [person, setPerson] =useState({
        name:"bouille",
        age:25
    })

  return (
    <div>
        {tableau.map((item)=>(
            <p>{item}</p>
        ))}

        <button
        className='bg-cyan-300 p-3 m-6'
        onClick={()=>setTableau([...tableau, 4, 5, 6])}
        >Ajouter 4, 5, 6</button>
        <button
        className='bg-cyan-300 p-3 m-6'
        onClick={()=>setTableau([...tableau, tableau.length+1, tableau.length+2])}
        >Ajouter 2 éléments </button>
        
        <hr />
        <p>Je m'appelle {person.name} et j'ai {person.age} ans.</p>
        {person.city && <p>J'habite {person.city}</p>}
        
        <button
        className='bg-cyan-300 p-3 m-6'
        onClick={()=>setPerson({...person, city : "Lyon"})}
        >Ajouter une ville</button>
      
    </div>
  )
}
