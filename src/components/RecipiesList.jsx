import { Link } from "react-router-dom";

function RecipiesList({recipies}) {
  return (
     
   <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-5 ">
    {recipies.map((recipe) => {
        return (
          <div className="card  bg-base-100 shadow-xl" key={recipe.id}>
            <figure className="px-10 pt-10">
              <img
                src={recipe.image}
                alt="Shoes"
                className="h-[200px]  md:h-60 w-96 object-cover rounded"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{recipe.title}</h2>
              <p className="line-clamp-3">{recipe.method}</p>
              <div className="card-actions w-full mt-3">
                <Link to={`/singleREcipe/${recipe.id}`} className="btn btn-primary w-full">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
    })}
   </div>
  )
}

export default RecipiesList