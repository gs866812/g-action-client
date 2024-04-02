import Footer from "./Footer";
import { NavbarWithMegaMenu } from "./NavbarWithMegaMenu";


const Layout = ({children}) => {
    return (
        <div>
            <section className="sticky top-0 z-50">
                <NavbarWithMegaMenu/>
            </section>
            <section>
                {children}
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default Layout;