import { SubmitBtn } from "../../components/buttons";
import styles from "../../styles/Registatration.module.css";

export default function RegistrationPage() {
    return (
        <div className = {styles.page}>
            <div className = {styles.nav_content}>
            </div>
            <div className = {styles.wrapper}>
                <div className = {styles.form_page}>
                    <h2>Заполните форму регистрации</h2>
                    <form action="" target="_self">
                        <input type = "text" placeholder="Фамилия" required />
                        <input type = "text" placeholder="Имя" required />
                        <input type = "text" list="countries" placeholder="Выберите свою страну" />
                        <datalist id = "countries">
                            <option value="Россия"></option>
                            <option value="Белоруссия"></option>
                            <option value="Казахстан"></option>
                        </datalist>
                        <input type = "text" list = "company" placeholder="Компания / Частное лицо" required />
                        <datalist id = "company">
                            <option value ="Компания"></option>
                            <option value="Частное лицо"></option>
                        </datalist>
                        <input type = "email" placeholder="Почта" required />
                        <input type = "password" placeholder="Пароль" required />
                        <SubmitBtn icon="arrow_outward"  name="Зарегистрироваться"/>
                        <div className = {styles.form_text}>
                            <p>нажимая, Зарегистрироваться вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}