import About from "../Components/Home/About";
import Company from "../Components/Home/Company";
import Layout from "../Components/Layout";
import Slider from "../Components/Slider";



const Home = () => {
    return (
        <Layout>
            <section>
                <Slider/>
            </section>
            <section className="lg:my-24 my-10">
                <About/>
            </section>
            <section>
                <Company/>
            </section>
        </Layout>
    );
};

export default Home;