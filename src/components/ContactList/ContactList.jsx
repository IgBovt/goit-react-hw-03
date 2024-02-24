import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return contacts.length < 1 ? (
    <p className={css.text}>You don`t have any contacts yet</p>
  ) : (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact onDelete={onDelete} name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}
