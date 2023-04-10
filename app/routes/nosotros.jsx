import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"
import { useOutletContext } from "@remix-run/react"

export function meta(){
  return [
    {
      title: "GuitarLA - Sobre Nosotros"
    },
    {
      description: "Venta de guitarras, blog de música"
    }
  ]
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen, 
      as: "image"
    }
  ]
}

function Nosotros() {

  const data = useOutletContext();

  console.log(data)

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
          <img src={imagen} alt="imagen sobre nosotros" />

          <div>
              <p>
                  Quisque dui erat, auctor a augue sit amet, iaculis dignissim 
                  nisi. Nam ac aliquam eros. In at condimentum turpis. Donec 
                  mollis ornare urna et vestibulum. Nullam sollicitudin risus 
                  ut odio venenatis fermentum. Pellentesque ut justo tortor. 
                  stibulum scelerisque massa sit amet sagittis faucibus. 
              </p>

              <p>
                  Quisque dui erat, auctor a augue sit amet, iaculis dignissim 
                  nisi. Nam ac aliquam eros. In at condimentum turpis. Donec 
                  mollis ornare urna et vestibulum. Nullam sollicitudin risus 
                  ut odio venenatis fermentum. Pellentesque ut justo tortor. 
                  stibulum scelerisque massa sit amet sagittis faucibus. 
              </p>

          </div>
      </div>
    </main>
  )
}

export default Nosotros