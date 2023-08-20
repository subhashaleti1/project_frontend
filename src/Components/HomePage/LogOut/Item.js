const Item=({pname,pimg})=>{
    return(
        <>
        <div className="list-group-item">
            <div className="row">
                <span style={{fontSize:"1.5rem"}}>Product Name:&nbsp;&nbsp;{pname}</span>
            </div>
            <div className="row">
            <img
          className="multi-image"
          src={pimg}
          style={{
            width: "100%",
            height: "210px",
            objectFit: "contain",
            marginBottom: "5px",
            marginTop: "5px",
          }}
          alt="Product Details"
        />
            </div>
        </div>
        </>
    )

}
export default Item;