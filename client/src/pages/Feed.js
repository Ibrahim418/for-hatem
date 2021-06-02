import React, {useEffect} from 'react'
import {loadUser} from '../actions/authaction'
import {useDispatch} from 'react-redux'
import { Button } from './Button'
import '../App.css'
import './Feed.css'
const Feed = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadUser())
    },[])
    return (
        <div className='feed-container'>
           
           <video src="/videos/video-1.mp4" autoPlay loop muted/>
           
           <h1>adventure begings NOW</h1><br/>
          
          
           <div className='feed-btns'>
               <Button className='btns' buttonStyle='btn--outline'
               buttonSize='btn--large'>Post Something</Button>
               </div>

        </div>
    )
}

export default Feed
