import React, {useState} from "react";

function SelectedCar(){
    const [selected,setSelected] = useState({
                                car: "",
                                color: ''
    })

    function handleChangeSelect(e){
        setSelected({
            ...selected,
            [e.target.name] : e.target.value
        });
    }

    return(
        <>
        <h1>Select your car</h1>

        <p>Select a car</p>
        <select onChange={handleChangeSelect} name="car" id="">
            <option value="">Select</option>
            <option value="Mercedes S600">Mercedes S600</option>
            <option value="Lambogini">Lambogini</option>
            <option value="VinFast">VinFast</option>
        </select>

        <p>Select a color</p>
        <select onChange={handleChangeSelect} name="color" id="">
            <option value="Black"> Black</option>
            <option value="White">White </option>
            <option value="Blue"> Blue</option>
        </select>

        {
            selected.car && selected.color &&
            <p>Your selected a {selected.color}- {selected.car} </p>
        }
        </>

    )
    

}
export default SelectedCar