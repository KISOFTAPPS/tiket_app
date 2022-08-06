import { SideNavBar, Footer } from "./";
export const Layout = ({ children }) => {
    return (
        <>
            <main className="d-flex p-0 m-0 bg-dark">
                <SideNavBar />
                {children}
            </main>
            <Footer />
        </>
    );
};
