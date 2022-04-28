import { ListItem } from "../src/components/ListItem";
import AppContext from "../src/context/AppContext";
import { useContext } from "react";

export default function Home() {
  const { items } = useContext(AppContext);

  return (
    <div className="search__items">
      {items?.map((el) => (
        <ListItem
          key={el.id}
          id={el.id}
          title={el.title}
          image={el.thumbnail}
          price={el.price}
          location={el.address.state_name}
          shipping={el.shipping.free_shipping}
        />
      ))}
    </div>
  );
}
