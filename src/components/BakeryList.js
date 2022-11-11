import { BakeryItem } from "./BakeryItem";

export const BakeryList = (props) => {
    return (
        <main className="BakeryListContainer">
            <h1>MY Bakery is da best on this side of Mississippi</h1>

            <div className="BakeryList">
                {props.data.map((item, index) => (
                <BakeryItem key={index} item={item} addToCart={props.onAddToCart} />
                ))}
            </div>
        </main>
    )
}