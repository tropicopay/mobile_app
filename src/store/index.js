import React from 'react'

class Context {

    constructor() {
        this.AuthContext = React.createContext();
    }

    getAuthContext() {
        return this.AuthContext;
    }

}

export default new Context();