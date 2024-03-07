function Culture({haitian}) {
    return(
        <div>
            <h4>{haitian.name}</h4>
            <img className="images" src={haitian.image} alt="Pictures"/>
            <h4>{haitian.category}</h4>
            <h4>{haitian.info}</h4>
        </div>
        
    )
}

export default Culture