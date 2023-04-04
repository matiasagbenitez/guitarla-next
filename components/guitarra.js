import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/guitarras.module.css";

export default function Guitarra({ guitarra }) {

  const { nombre, descripcion, precio, imagen, url } = guitarra;
  const urlImagen = imagen.data.attributes.formats.medium.url;

  return (
    <div className={styles.guitarra}>
      <Image src={urlImagen} alt={`Imagen guitarra ${nombre}`} width={300} height={300} />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <Link href={`/guitarras/${url}`} className={styles.enlace}>
          Ver producto
        </Link>
      </div>
    </div>
  )
}
