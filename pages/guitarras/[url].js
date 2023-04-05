import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/guitarras.module.css";

export default function Producto({ guitarra, agregarCarrito }) {

    const [cantidad, setCantidad] = useState(0);

    const { nombre, descripcion, precio, imagen, url } = guitarra[0].attributes;
    const urlImagen = imagen.data.attributes.formats.medium.url;

    const handleSubmit = e => {
        e.preventDefault();
        if (cantidad < 1) {
            alert('La cantidad debe ser mayor o igual a 1');
            return;
        }

        // Construir el objeto
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: urlImagen,
            nombre,
            precio,
            cantidad,
        }

        // Pasando la información al contexto
        agregarCarrito(guitarraSeleccionada);
    }

    return (
        <Layout
            title={nombre}
            description={descripcion}
        >
            <div className={styles.guitarra}>
                <Image src={urlImagen} alt={`Imagen guitarra ${nombre}`} width={300} height={300} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form className={styles.formulario} onSubmit={handleSubmit} >
                        <label htmlFor="cantidad">Cantidad</label>
                        <select id="cantidad" onChange={e => setCantidad(+e.target.value)}>
                            <option value="0">Seleccione la cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input type="submit" value="Agregar al carrito" />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

// GET SERVER SIDE PROPS
// export async function getServerSideProps({ params }) {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${params.url}&populate=imagen`);
//     const { data: guitarra } = await respuesta.json();
//     return {
//         props: {
//             guitarra,
//         },
//     };
// }

// Genera todas las páginas estáticas en tiempo de compilación
export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
    const { data: guitarras } = await respuesta.json();
    const paths = guitarras.map(guitarra => ({
        params: { url: guitarra.attributes.url },
    }));
    return {
        paths,              // Los paths que se van a generar
        fallback: false,    // Si no se encuentra la página, muestra un 404
    };
}

// Genera una página estática en tiempo de compilación
export async function getStaticProps({ params }) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${params.url}&populate=imagen`);
    const { data: guitarra } = await respuesta.json();
    return {
        props: {
            guitarra,
        },
    };
}