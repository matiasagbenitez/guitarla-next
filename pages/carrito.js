import { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import Image from 'next/image';
import styles from '@/styles/carrito.module.css';

export default function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    setTotal(total);
  }, [carrito]);

  return (
    <Layout title='Carrito'>
      <main className='contenedor'>
        <h1 className='heading'>Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>
            {carrito.length === 0 ? (
              <p>No hay artículos en el carrito</p>
            ) : (
              carrito.map(producto => (
                <div className={styles.producto} key={producto.id}>
                  <div>
                    <Image width={90} height={200} src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <p className={styles.precio}>Precio unitario: ${producto.precio}</p>
                    <div className={styles.cantidad}>
                      <label htmlFor="cantidad">Cantidad</label>
                      <select id="cantidad" 
                        value={producto.cantidad} 
                        className={styles.select}
                        onChange={e => actualizarCantidad({
                          id: producto.id,
                          cantidad: e.target.value
                        })}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <p className={styles.subtotal}>Subtotal: ${producto.precio * producto.cantidad}</p>
                  </div>
                  <button type='button' className={styles.eliminar} onClick={() => eliminarProducto(producto.id)} >x</button>
                </div>
              ))
            )}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  )
}
