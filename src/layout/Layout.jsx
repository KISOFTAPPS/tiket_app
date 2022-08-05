import { SideNavBar } from "./";
export const Layout = ({ children }) => {
    return (
        <>
            <div className="d-flex">
                <SideNavBar/>
                <main>
                    <section>{children}</section>
                </main>
            </div>
        </>
    );
};
