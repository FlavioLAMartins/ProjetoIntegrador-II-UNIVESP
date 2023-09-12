import styles from "./ConteudoLeitor.module.css"
import Leitor from "../../pages/Leitor";

function ConteudoLeitor() {

    return (

        <section className={styles.conteudoleitor}>
            <Leitor />
        </section>
    );

}

export default ConteudoLeitor;