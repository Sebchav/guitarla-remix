import { useLoaderData, useOutletContext } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import styles from "~/styles/guitarras.css"
import ListadoGuitarras from "../components/listado-guitarras"

export function meta(){
  return [
    {title: "GuitarLA - Tienda de Guitarras"},
    {description: "GuitarLA - Nuestra colección de guitarras"}
  ]
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export async function loader(){
    const guitarras = await getGuitarras()
    
    return guitarras.data;
}

function Tienda() {

  const data= useOutletContext();
  console.log(data);
  const guitarras = useLoaderData();
  

  return (
    <main className="contenedor">
        <ListadoGuitarras 
          guitarras={guitarras}
        />
    </main>
  )
}

export default Tienda