import Head from "next/head"
import Cart from "./cart"
import Navbar from "./navbar"


function Layout({ children }) {
    return <div className="bg-gray-100">
        <Head>
            <title>TCG Marketplace</title>
        </Head>
        <Navbar />
        <main className="min-h-[80vh] max-w-6xl mx-auto pb-20 text-center">

            {children}
        </main>

        <Cart />
    </div>
}

export default Layout