import Image from 'next/image';
import Link from 'next/link';
import { formatearFecha } from '@/utils/helpers';
import styles from '@/styles/blog.module.css';

export default function Post({ post }) {

    const { titulo, contenido, imagen, url, publishedAt } = post;
    const urlImagen = imagen.data.attributes.formats.medium.url;
    return (
        <article className={`${styles.post}`}>
            <Image src={urlImagen} alt={`Imagen post ${titulo}`} width={1000} height={400} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`} className={styles.enlace}>
                    Ver post
                </Link>
            </div>
        </article>
    )
}
