import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../component/card";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Link to={"/add"} className="btn btn-info">Add A Pet</Link>
			{store.pets?.map((pet, index) => {
				return <Card key={index} name={pet.name} email={pet.email} breed={pet.breed} gender={pet.gender} />
			})}

		</div>
	)
};
