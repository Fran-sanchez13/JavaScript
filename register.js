const registerForm = document.getElementById('registerForm')
const nameInput = document.getElementById('name')
const lastNameInput = document.getElementById('lastname')

/*----------Funciones auxiliares------------- */
const isEmpty = (input) => {
   return !input.value.trim().length// si el input tiene length, dame false
}


const showError = (input, message) => {
    const formField = input.parentElement
    formField.classlist.remove('succes')
    formField.classlist.add('error')
    //terminar esta parte de los campos en error

}



/*-----Funciones de validacion de inputs----- */
const checkTextInput = (input) => {
    let valid = false //le declaramos una banderita de valid para que el input pueda validarlo
}

    if('esta vacio'){ 
        'mostrar error'
        'retorná'
    }
    if('si no tiene....'){ 
       'mostrar error'
        'retorná'
    }

'mostrar input correcto'
    valid = true
    return valid



/*----Validacion general y almacenamiento de  datos---- */

const submitHandler = (e) => {
//prevenimos el comportamiento por default
e.preventDefault()
//validar los inputs
//agregar al usuario
//guardar en el localStorage
//informar al usuario
//redirigir al login

}

const init = () => {
    registerForm.addEventListener('submit', submitHandler)
    nameInput.addEventListener('input', () => checkTextInput(nameInput))

}

init()