import React from "react";
import '../estilos/MovieListEstilos.css';
import {moviesData} from "../data/moviesData.js";
import {Movie} from "./Movie.js";


export const MovieList = () => {
	const mD = moviesData;
	console.log(mD[0]);/*.map((movie_Dict, index)=>{
					movie_Dict;
				
			}));*/
	if (mD === null){
		<>
		<div className = "Panel">
		<p>Sin peliculas!</p>
		</div>
		</>

	};

	return(
		<>
		<div className = "Panel">

		
		
		{mD.map((movie, i) => <Movie className = "Panel-Pelicula" 
									key = {i}
									title= {movie.title}
									image = {movie.image}
									duration = {mD[0].duration}
									synopsis = {mD[0].synopsis}
									genre = {mD[0].genre}
									rating = {mD[0].rating} />
		)}

		</div>
		</>
		);
};

/*
{mD.map((mD, index)=>{
			console.log(mD);
		})}
*/