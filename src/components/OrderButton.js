const OrderButton = ({orderAction}) => {
    const orderBy = (e) => {
        orderAction(e.target.value);
    }

    return (
        <>
            <div className="caja">
                <select onChange={orderBy}>
                    <optgroup label="Ordenar por:">
                        <option value="cat">Categoría</option>
                        <option value="alfa">Alfabético</option>
                        <option value="creation">Creación</option>
                    </optgroup>

                </select>
            </div>
        </>
    )
}

export default OrderButton;