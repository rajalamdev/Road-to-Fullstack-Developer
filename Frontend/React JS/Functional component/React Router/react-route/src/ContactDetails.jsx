import { useParams } from "react-router-dom";

export default function ContactDetails(){
    
    const urlParams = useParams();
    return (
        <h1>{urlParams.slug}</h1>
    )
}