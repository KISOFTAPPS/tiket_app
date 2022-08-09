import { SideNavBar, Footer } from "./";
export const Layout = ({ children }) => {
    return (
        <>
            <main className="flex flex-row">
                <SideNavBar />
                <section className="w-full flex justify-center items-center m-5 border rounded shadow-lg p-5">
                    {children}
                </section>
            </main>
            <Footer />
        </>
    );
};
