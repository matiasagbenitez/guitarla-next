import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import Logo from '@/public/img/logo.svg';    // De esta forma flasha el build
import styles from '@/styles/header.module.css';

export default function Header() {

    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href='/' legacyBehavior>
                    <a>
                        <Image src='/img/logo.svg' alt='Logo GuitarLA' width={300} height={40} />
                    </a>
                </Link>
                <nav className={styles.navegacion}>
                    <Link href='/' className={router.pathname === '/' ? styles.active : ''}>
                        Inicio
                    </Link>
                    <Link href='/nosotros' className={router.pathname === '/nosotros' ? styles.active : ''}>
                        Nosotros
                    </Link>
                    <Link href='/tienda' className={router.pathname === '/tienda' ? styles.active : ''}>
                        Tienda
                    </Link>
                    <Link href='/blog' className={router.pathname === '/blog' ? styles.active : ''}>
                        Blog
                    </Link>
                    <Link href='/carrito'>
                        <Image src='/img/carrito.png' alt='Carrito' width={20} height={20} />
                    </Link>
                </nav>
            </div>
        </header>
    )
}
