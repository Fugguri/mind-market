import { SubmitBtn } from "../../components/buttons";
import styles from "../../styles/Reg2log.module.css";
import Link from "next/link";

export default function RegistrationLoginPage() {
    return (
        <div className = {styles.page}>
            <div className = {styles.nav_content}>
            </div>
            <div className = "wrapper">
                <div className = "form_page">
                    <h2>Добро пожаловать в нашу CRM систему на основе AI-технологий. Зарегистрируйтесь и получите доступ к инновационным технологиям.</h2>
                    <form action="" target="_self">
                        <button type = "submit">Войти</button>
                    </form>
                    <form action="" target="_self">
                        <Link href="/registration"><button type = "submit">Зарегистрироваться</button></Link>
                        <p className="text-link">Forgot your password?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}
