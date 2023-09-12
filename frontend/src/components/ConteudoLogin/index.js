import styles from "./ConteudoLogin.module.css"
import Login from "../../pages/Login";
import Banner from '../../components/Banner';


function ConteudoLogin() {

    return (

        <section className={styles.conteudologin}>
            <Login />
           
        </section>
    );

}

export default ConteudoLogin;