import Layout from "./components/Layout/Layout";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default App;
