import React,{useEffect,useState} from 'react'
import '../Content.css'
import Note from './Note'
import {db} from '../firebase'
import { useStateValue } from '../StateProvider';
import Empty from './Empty';

function Content() {
    const [notes,setNotes] = useState("")

    const [{user},dispatch] = useStateValue();
    useEffect(()=>{
       db.collection("users").doc(user.uid).onSnapshot((doc)=>{
        setNotes(doc.data().notes);
       }) 
    },[])
    return (
        <div className="content">
            {notes?notes.map((note)=>{
                return <Note title={note.title} content={note.content} color={note.color} key={note.id}/>
            }):<Empty/>}
            
        </div>
    )
}

export default Content
