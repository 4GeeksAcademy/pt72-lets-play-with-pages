const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pets: [
				{"name" : "Kirby", "breed": "mixed", "gender": "female", "email":"kirby@dog.com"},
				{"name" : "Bongo", "breed": "Lab", "gender": "male", "email":"bongo@dog.com"},
				{"name" : "Sombra", "breed": "cat?", "gender": "female", "email":"sombra@dcat.com"},
				{"name" : "Grizel", "breed": "cat?", "gender": "female", "email":"grizel@cat.com"},
			]
		},
		actions: {

			createPet: (name, email, breed, gender) => {
				let pet = {name: name, email: email, breed: breed, gender: gender}
				setStore({pets: [...getStore().pets, pet]})
			},














			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
