import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import { IoIosPersonAdd } from 'react-icons/io';
import css from './ContactForm.module.css';

const initialValues = { name: '', number: '' };

export default function ContactForm() {
  const nameID = nanoid();
  const numberID = nanoid();

  return (
    <Formik initialValues={initialValues}>
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor={nameID}>
            Name:
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameID}
          ></Field>
        </div>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor={numberID}>
            Number:{' '}
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberID}
          ></Field>
        </div>
        <button className={css.btn}>
          <IoIosPersonAdd className={css.icon} size={20} />
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
