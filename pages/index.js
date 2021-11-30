import Heads from "../components/Heads";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className=" bg-green-100 flex flex-col items-center min-h-screen py-2">
      <Heads />
      <main className="bg-green-100 align-middle w-screen  ">
        <Header />
        <Main />
      </main>
     <Footer/>

    </div>
  );
}
