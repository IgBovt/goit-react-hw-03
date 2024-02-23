import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import { IoIosPersonAdd } from 'react-icons/io';

const initialValues = { name: '', number: '' };

export default function ContactForm() {
  const nameID = nanoid();
  const numberID = nanoid();

  return (
    <Formik initialValues={initialValues}>
      <Form>
        <div>
          <label htmlFor={nameID}>Name</label>
          <Field type="text" name="name" id={nameID}></Field>
        </div>
        <div>
          <label htmlFor={numberID}>Number</label>
          <Field type="text" name="number" id={numberID}></Field>
        </div>
        <button>
          <IoIosPersonAdd size={20} />
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
