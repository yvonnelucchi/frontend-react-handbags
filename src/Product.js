
function Product({ image, title, prijs, span}) {
    return (
        <article  className={"product"}>
            <span className={"article"}>{span}</span>
            <img src={image} alt={title}/>
            <p className={"product-name"}>
                {title}</p>
            <h4 className="prijs">{prijs}</h4>

        </article>
    );
}

export default Product;
