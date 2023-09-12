import styles from "./PageNotFound.module.css"
import erro404 from "./erro404.png";
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function PageNotFound() {

    return (
        <>
        < Header />
        <section className={styles.container}>
            <h2>Conteúdo não localizado!</h2>
            <img src={erro404} alt="Logo página não localizada"/> <br/><br/><br/><br/><br/>
        </section> 
        < Footer />
        </>
    );

}

export default PageNotFound;
