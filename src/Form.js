
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CustomForm = () => {

    return (
        <Formik 
            initialValues = {
                {
                name:"",
                email:"",
                amount:0,
                currency:"",
                text:"",
                terms:false
                }
             }
            
            validationSchema = { yup.object({
                name:yup.string()
                        .min(2,"Мин. кол-во символов - 2")
                        .required("Это поле обязательно для заполнения!"),
                email:yup.string()
                        .required("Это поле обязательно для заполнения!")
                        .email("Не правильный email"),
                amount:yup.number()
                        .required("Сумма обязательна!")
                        .min(5),
                currency:yup.string()
                            .required("Обязательно выбрать валюту!"),
                text:yup.string()
                        .required("Это поле обязательно для заполнения!") 
                        .min(10),
                terms:yup.boolean()
                        .required("Необходимо согласие")
                        .oneOf([true],"Необходимо согласие")      
                })
            }
            
            onSubmit = {(value)=>console.log(value.name)}
        >
            <form
            className='form'
            >
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <ErrorMessage name='name' component="div"/>
                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage name='email' component="div"/>
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"

                />
                <ErrorMessage name='amount' component="div"/>
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as = "select"
                    >
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage name='currency' component="div"/>
                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage name='text' component="div"/>
                <label className="checkbox">
                    <Field name="terms" type="checkbox" />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage name='terms' component="div"/>
                <button type="submit">Отправить</button>
            </form>
        </Formik>
    )
}

export default CustomForm;