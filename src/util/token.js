import { AsyncStorage } from 'react-native'

export function setToken(token) {
    try {
        return AsyncStorage.setItem('@VeloEZ:jwt', token)
    } catch (error) {
        console.log(error)
    }
}
export function getToken() {
    try {
        return AsyncStorage.getItem('@VeloEZ:jwt')
    } catch (error) {
        console.log(error)
    }
}
export async function clearToken() {
    try {
        return AsyncStorage.clear()
    } catch (error) {
        console.log(error)
    }
}