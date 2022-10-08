import Head from "next/head";

export default function Layout({children}) {
    return (
        <div className="bg-gradient-to-b from-[#EFEFFE] to-white px-5 text-primary">
            <Head>
                <title>Shakespear - The little blog</title>
            </Head>
            <header className="">Navbar</header>
            <main className="min-h-[80vh] md:px-[100px]">{children}</main>
            <footer className="">Footer</footer>
        </div>
    );
}