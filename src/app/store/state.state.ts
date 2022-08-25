import { Statement } from '@angular/compiler'
import { createAction, createReducer, on, props } from '@ngrx/store'
import { Lido } from '../shared/lido'
import { Lidos } from '../shared/lidos'
import { User } from '../shared/user'

export interface State {
    user: User,
    lido: Lido[]

}

export const loginInitialState: State = {
    user: {
        id: '1',
        name: 'jeronimo',
        password: '123456',
        login: true
    },
    lido: Lidos

}

export const loginUser = createAction('[ login ] login', props<{ payload: State}>())
export const logoffUser = createAction('[ login ] logof')
export const marcarlido = createAction('[ state ] marcarLido', props<{ payload: Lido}>())

export const stateReducer = createReducer(
    loginInitialState,
    on(loginUser, (state, { payload }) => {
        state = {
            user: {
                id: payload.user.id,
                name: payload.user.name,
                password: payload.user.password,
                login: payload.user.login
            },
            lido: state.lido
        }
        return state
    }),
    on(logoffUser, (state) =>{
        state = {
            user: {
                id: '',
                name: '',
                password: '',
                login: false

            },
            lido: state.lido
        }
        return state
    }),
    on(marcarlido, (state, { payload }) => {
        state = {
            user: state.user,
            lido: [...state.lido, payload]
        }
        return state
    })
)