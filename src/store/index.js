import React from 'react'

class Context {

    constructor() {
        this.AuthContext = React.createContext();
        this.AuthInitialState = {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    }

    getAuthContext() {
        return this.AuthContext;
    }
    getAuthInitialState(){
        return this.AuthInitialState;
    }
}

export default new Context();