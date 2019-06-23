const redux = require('redux');  // Utilizando NodeJs

/* ***** Creando el Store ***** */
const createStore = redux.createStore;

// state inicial
const stateInicial = {
    usuarios: []
}

// Reducer: state y acción 
const reducerPrincipal = (state = stateInicial, action) => {
    if(action.type === 'AGREGAR_USUARIO'){
        return {
            ...state,
            usuarios: action.nombre
        }
    }
    if(action.type === 'MOSTRAR_USUARIOS') {
        return {
            ...state
        }
    }

    return state;
}

// Create store y store (contiene el state de la aplicación)
// 3 parametros: reducer, state inicial, applymiddleware
const store = createStore(reducerPrincipal);
console.log(store.getState());

// Suscribe o suscripcion
store.subscribe(() => {
    console.log('Algo cambio...', store.getState());
})

// Dispatch es la forma de cambiar el state
store.dispatch({type: 'AGREGAR_USUARIO', nombre: 'Casandra'});
store.dispatch({type: 'MOSTRAR_USUARIOS'})
console.log(store.getState());