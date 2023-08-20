import Item from "./Item";

const Index = ({Reviews}) => {
return(<>
  <div className="list-group">
    {Reviews.map((x) => {
      return (
        <Item
          pname={x.product.name}
          pimg={x.product.imgUrl}
        ></Item>
      );
    })}
  </div>
  </>);
};
export default Index;