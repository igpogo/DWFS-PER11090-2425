import React from "react";
import '../estilos/MovieEstilos.css';

export const Movie = ({title,image,duration,synopsis, genre, rating}) => {
	return (
			<div className = "Movie-Card">
					<h3 className = "Card-titulo">Super titulo de : {title}</h3>
					<img className = "Card-cartel" src={image} alt="Perdón, \n no encontramos \nel cartel"/>
					<div className = "Card-sinopsis">{synopsis}</div>
					<p className = "Card-detalles"> Duración de {duration} minutos, de {genre}, con una valoración de {rating}.</p>
					<button className = "Card_button">Elegir Asientos</button>
			</div>
		);
};