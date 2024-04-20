import { SubmitBtn } from "../../components/buttons";
import styles from "../../styles/Login.module.css";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className = {styles.page}>
            <div className = {styles.wrapper}>
                <div className = {styles.form_page}>
                    <h2>Вход</h2>
                    <form action="" target="_self">
                        <input type="text" placeholder="Логин" />
                        <input type ="password" placeholder="Пароль" />
                        <button type = "submit">Войти</button>
                        <p>Forgot password?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}