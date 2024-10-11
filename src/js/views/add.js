import React, {useState, useContext} from 'react'
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router';

export default function Add() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [breed, setBreed] = useState("");
    const [gender, setGender] = useState("");
    const {actions, store} = useContext(Context)
    const navigate = useNavigate()

   const addPet = () => {
        actions.createPet(name, email, breed, gender)
        console.log("you clicked me")
        navigate("/")
   }
 
    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input onChange={(ev) => setName(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input onChange={(ev) => setEmail(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Breed</span>
                <input onChange={(ev) => setBreed(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Gender</span>
                <input onChange={(ev) => setGender(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <button className='btn btn-info' onClick={() => addPet()}>Create Pet</button>
        </div>
    )
}
