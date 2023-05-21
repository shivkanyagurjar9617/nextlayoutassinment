import Footer from "../../component/footer";
import Header from "../../component/header";
import LeftAside from "../../component/leftaside";
import RightAside from "../../component/rightaside";





export default function Home() {
  return (
    <>
    <Header/>
    <main>
        <div className="row ">
            
          <div className="col-3 ">
          <LeftAside />
          </div>
            
            
          
          <div className="col-6 h-100">
            <section>
              <h1>The City</h1>
              <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
            </section>
            
          </div>
          <div className="col-3 h-100">
          <RightAside/>
          </div>
            
        </div>
    </main>
    <Footer/>
    </>
  )
}
