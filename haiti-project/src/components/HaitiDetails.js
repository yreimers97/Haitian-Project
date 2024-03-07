import { useOutletContext } from "react-router-dom";
import Culture from "./Culture";

function HaitianDetails(){
    const {haiti} = useOutletContext()
    const haitianComponents = haiti.map(haitian => {
        return <Culture key={haitian.id} haitian={haitian}/>
    })
    
    return(
        <div className="pages">
            <h2>Things to Love About Haiti:</h2>
                <ul>{haitianComponents}</ul>
        </div>
    )
}

export default HaitianDetails