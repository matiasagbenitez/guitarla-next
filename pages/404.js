import Layout from "@/components/layout";
import Link from "next/link";

export default function Pagina404() {
    return (
        <Layout
            title={'Error 404'}
            description={'Página no encontrada'}
        >
            <h1 className="heading">Página no encontrada</h1>
            <p className="error">Lo sentimos, la página que buscas no existe.</p>
            <Link href="/" className="error-enlace">
                Volver al inicio
            </Link>
        </Layout>
    )
}
