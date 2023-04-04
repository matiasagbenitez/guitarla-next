import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/guitarras.module.css";

export default function Producto({ guitarra }) {

    const { nombre, descripcion, precio, imagen, url } = guitarra[0].attributes;
    const urlImagen = imagen.data.attributes.formats.medium.url;

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