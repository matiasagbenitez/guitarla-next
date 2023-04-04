import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/nosotros.module.css';

export default function Nosotros() {
    return (
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros, GuitarLA, tienda de música'}
        >
            <main className={`contenedor ${styles.nosotros}`}>
                <h1 className='heading'>Nosotros</h1>

                <div className={styles.contenido}>
                    <Image src='/img/nosotros.jpg' alt='Nosotros' width={800} height={400} />
                    <div className={styles.texto}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                            ducimus a distinctio necessitatibus. Commodi ad sint similique
                            excepturi ducimus hic? Dolorem dolore fugit id possimus? Animi,
                            adipisci distinctio quidem omnis praesentium quod doloremque minima
                            at enim tempore exercitationem eaque illo porro deleniti. Sequi
                            ducimus aspernatur dolorum, doloremque porro ea dolore.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                            ducimus a distinctio necessitatibus. Commodi ad sint similique
                            excepturi ducimus hic? Dolorem dolore fugit id possimus? Animi,
                            adipisci distinctio quidem omnis praesentium quod doloremque minima
                            at enim tempore exercitationem eaque illo porro deleniti. Sequi
                            ducimus aspernatur dolorum, doloremque porro ea dolore.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
