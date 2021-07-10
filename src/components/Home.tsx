import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Tetris from './tetris/Tetris'

const Home = () => {
    return (
        <> 
            <NavBar />
            <Switch>
                <Route path="/tetris" component={Tetris} />
            </Switch>
        </>
    )
}

export default Home
