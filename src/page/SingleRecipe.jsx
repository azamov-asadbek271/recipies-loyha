import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
function SingleRecipe() {
    const {id} = useParams()
    const [recipie, setRecipie] = useState(null);
    useEffect(() => {
      fetch("http://localhost:3000/recipies/" + id)
        .then((data) => {
          return data.json();
        })
        .then((recipie) => {
          setRecipie(recipie);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    
  return (
    <div>
      {recipie && <div>
        <img src={recipie.image} alt="" className="w-full h-96 rounded object-cover" />
        </div>}
    </div>
  );
}

export default SingleRecipe