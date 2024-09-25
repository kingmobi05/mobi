import React, {useState} from "react";




const Form = ({x}) => {
    const[name, setName] = useState('');
    const [stateOrigin, setStateOforigin] = useState('');
    const [profession, setProfession] = useState('');
  


    const tunde = (e) => {
        e.preventDefault()
        if(!name){
            alert('All fields are required')
        }else{
            x({name, stateOrigin, profession

        })
        }
        setName('')
        setStateOforigin('')
        setProfession('')
    }

    return(
        <div>

            <form action="" onSubmit={tunde}>

                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">State of origin</label>
                    <input type="text" placeholder="Enter State" value={stateOrigin} onChange={(e) => setStateOforigin(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Profession</label>
                    <input type="text" placeholder="Enter profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
                </div>

                <input type="submit" />
            </form>
           
        </div>
    )
}


export default Form