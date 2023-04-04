import Layout from "@/components/layout";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import { formatearFecha } from "@/utils/helpers";

export default function Post({ post }) {

    const { titulo, contenido, imagen, url, publishedAt } = post[0].attributes;
    const urlImagen = imagen.data.attributes.url;

    return (
        <Layout title={titulo} description={'Post de música, venta de guitarras y más'}>
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={urlImagen} alt={`Imagen post ${titulo}`} width={1000} height={400} />
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/posts`);
    const { data: posts } = await respuesta.json();
    const paths = posts.map(post => ({
        params: { url: post.attributes.url },
    }));
    return {
        paths,              // Los paths que se van a generar
        fallback: false,    // Si no se encuentra la página, muestra un 404
    };
}

// Genera una página estática en tiempo de compilación
export async function getStaticProps({ params }) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${params.url}&populate=imagen`);
    const { data: post } = await respuesta.json();
    return {
        props: {
            post,
        },
    };
}