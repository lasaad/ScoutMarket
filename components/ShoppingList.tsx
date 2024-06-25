const foods = [
    "pâtes",
    "riz",
    "sauces"
]

function ShoppingList() {
    return (
        <ul>
            {foods.map((food, index) => (
                <li key={index} onClick={handleClick}>{food}</li>
            ))}
        </ul>
    )
}


function CareScale(props : any) {
    const scaleValue = props.scaleValue
    return <div>{scaleValue}</div>
}

function handleClick(e : any) {
    console.log('✨ Ceci est un clic ✨', e)
}

export default ShoppingList