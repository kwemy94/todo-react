import { useEffect, useState } from "react"
import FormInput from "../../auth/forms/FormInput";

function Create() {

    let [todo, setTodo] = useState(
        {
            user_id: '', 
            intitule: '', 
            debut: '', 
            fin: '', 
            statut: ''
        })
    // let [userId, setUserId] = useState({user_id: JSON.parse(sessionStorage.getItem('user').id )})
    let [statutTache, setStatutTache] = useState(false)

    const inputs = [

        {
            id:1,
            name:"user_id",
            type:"hidden",
            placeholder:"",
            label:"",
            value: JSON.parse(sessionStorage.getItem('user')).id,
            errorMessage:"user id invalide",
            required: true
  
        },
        {
            id:2,
            name:"intitule",
            type:"text",
            placeholder:"Intitulé de la tache",
            label:"Intitulé",
            errorMessage:"Intitulé invalide",
            required: true
  
        },
        {
            id:3,
            name:"debut",
            type:"date",
            placeholder:"Date de début",
            label:"Date de début",
            errorMessage:"Date invalide",
            required: true
  
        },
        {
            id:4,
            name:"fin",
            type:"date",
            placeholder:"Date de fin",
            label:"Date de fin",
            errorMessage:"date de fin invalide",
            required: true
  
        },
        {
            id:5,
            name:"statut",
            type:"text",
            placeholder:"Ex: En cours, Terminer, Delai expirer",
            label:"Statut",
            errorMessage:"Statut invalide",
            required: true
  
        }
       
    ];
    // let [user, setUser] = useState({id:'1', name: 'test',username:'test', email: 'email@mail.fr', password: '1234'})

    // useEffect(()=>{
    //     if (!sessionStorage.getItem('user')) {
    //         sessionStorage.setItem('user', JSON.stringify(user))
    //     }
    // }, [])


    
    const onChange =(e)=>{
        setTodo({...todo, [e.target.name]: e.target.value   });
    }

    function validateForm(){
        return todo.intitule.length > 0 && todo.debut.length > 0 && todo.fin.length > 0 && todo.statut.length > 0;
    }
    
   let handleSubmit = (e) =>{
        e.preventDefault();
        console.log(todo);
        if(localStorage.getItem('DBTaches')){
            try {
                let db = localStorage.getItem('DBTaches')
                let datas = JSON.parse(db)
                // console.log('id: '+JSON.parse(sessionStorage.getItem('user')));
                // let tache = [{ ...todo, user_id: JSON.parse(sessionStorage.getItem('user').id )}]
                console.log(todo);
                // localStorage.setItem('DBTaches', JSON.stringify([...datas, todo]))

                alert('Tache crée!')
    
            } catch (error) {
                console.log(error);
                alert("Oups!! Une erreur s'est produite" +error)
            }
        } else {
            localStorage.setItem('DBTaches', JSON.stringify([todo]))

            alert('Tache crée!')
        }
        
    }

    return(
        <div className="register">
            <form onSubmit={handleSubmit}>
                <h1>Création de taches</h1>
                {inputs.map((input) =>(
                    <FormInput key={input.id} {...input}  onChange={onChange} />
                    
                ))}
                {/* <select className="formSelect" required onChange={setStatutTache}>
                    <option selected disabled>Statut de la tâche</option>
                    <option value='1'>En cours</option>
                    <option value='2'>Terminé</option>
                    <option value='3'>Expiré</option>
                </select> */}

                <button >Creer</button>

            </form>
        </div>
    )
}

export default Create 