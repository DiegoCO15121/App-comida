import { View, SafeAreaView, FlatList } from "react-native";
import Cards from "../components/Cards";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

export default function Home() {
  const isFocused = useIsFocused();
 /*  const data = [
    {
      id: 1,
      name: "Hamburguesa",
      price: 18.5,
      description: "La mejor hamburguesa",
      image:
        "https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/05/hamburguesa-al-carbon-clasica.png",
    },
    {
      id: 2,
      name: "HotDog",
      price: 30.5,
      description: "Esta muy rico",
      image:
        "https://playswellwithbutter.com/wp-content/uploads/2022/05/Grilled-Hot-Dogs-How-to-Grill-Hot-Dogs-38.jpg",
    },
    {
      id: 3,
      name: "Refresco Manzanita",
      price: "25",
      description: "Alto en calorias",
      image:
        "https://www.pidefacilraul.com/cms/wp-content/uploads/2020/11/09-132.jpg",
    },
  ]; */

  const [productos, setProductos] = useState([]);
  
  const obtenerColeccion = async () => {
    try {
      const q = collection(db, "Products");
      const querySnapshot = await getDocs(q);

      const documentosArray = [];
      querySnapshot.forEach((doc)=>{
        documentosArray.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setProductos(documentosArray);
    } catch {
      console.log("Error al obtener los datos");
    }
  };

  useEffect(() => {
    obtenerColeccion();
  }, []);

  useEffect(() => {
    if (isFocused) {
      obtenerColeccion();
    }
  }, [productos]);

  return (
    <SafeAreaView className=" bg-amber-400 h-full pt-12">
      <FlatList
      showsHorizontalScrollIndicator={false}
      contentContainerStyle ={{
        padingBottom:80
      }}
        data={productos}
        keyExtractor={(item) => item.id}
        className="p-4"
        renderItem={({ item }) => (
          <Cards
            item={item}
            name={item.nombre}
            description={item.descripcion}
            price={item.precio}
            image={item.urlImagen}
          />
        )}
        ItemSeparatorComponent={<View className="h-3" />}
      />
    </SafeAreaView>
  );
}
