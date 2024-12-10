import React from "react";
import '../estilos/estilosGeneral.css';
import {Footer} from "../components/Footer.js";
import {Header} from "../components/Header.js";
import {MovieList} from "../components/MovieList.js";



export const Movies = () => {
	return (
		<>
		<div className= "Main-Movies">
			<Header/>
			</div>
			<div className = "Movies-Opciones">
				<h3 className = "Opciones-titulo">Las películas en nuestro cine</h3>
				<div>
				<MovieList />
				</div>
			</div>
			<div className = "Main-footer">
			<Footer />
		</div>
		
		
		</>
		);
};

/*


			*/