import styles from "./ConteudoLivro.module.css"
import Livro from "../../pages/Livro";


function ConteudoLivro() {

    return (

        <section className={styles.conteudolivro}>
            <Livro />
        </section>
    );

}

export default ConteudoLivro;