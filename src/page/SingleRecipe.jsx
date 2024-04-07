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
      {recipie && (
        <div>
          <img
            src={recipie.image}
            alt=""
            className="w-full h-96 rounded object-cover mb-5"
          />
          <h1 className="mb-5"> Nomi: {recipie.title}</h1>
          <p className="flex gap-5 mb-5"> Mahsulotlar:{recipie.ingredients.map((item) => {
            return(
              <span key={item}>{item}</span>
            )
          })}</p>
          <p className="mb-5"> Vaqt: {recipie.cookingTime}</p>
           <p>{recipie.method}</p>
        </div>
      )}
    </div>
  );
}

export default SingleRecipe