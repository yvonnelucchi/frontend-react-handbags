function Tile ({image, title, text }) {
    return (
        <section>
        <img src={image}/>
        <h2 className={"tile-name"}>{title}</h2>
        <p className={"text"}>{text}</p>
        </section>

    )
}
export default Tile;



// <img/>
// <h2>title</h2>
// <p></p>