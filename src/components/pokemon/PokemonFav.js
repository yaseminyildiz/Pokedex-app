// function PokemonFav(){
//     const [fullList, setFullList] = useState(['item1', 'item2', 'item3', 'item4'])
//     const [favList setFavList] = useState([]) 
  
//     const handleFavAddClick=(e)=>{
//         setFavList(preState=>[...preState, e])
//         setFullList(preState=> preState.filter(item => item !== e))
//     }
  
  
//     return(
//         <div>
//             Full List (add to fav by clicking them)
//             <ul>
//              {
//                  fullList.map(e=> <li key={e} onClick={()=>handleFavAddClick(e)}>{e}</li>)
//              }
//             </ul>
  
//             Fav List
//             <ul>
//              {
//                  favList.map(e=> <li key={e}>{e}</li>)
//              }
//             </ul>
//         </div>
//     )
//   }
//   export default PokemonFav;
