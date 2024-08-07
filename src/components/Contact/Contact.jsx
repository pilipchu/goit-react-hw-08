import { FaUserAlt } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { openWindow } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handledDelete = () => {
    dispatch(deleteContact(id));
  };

  const openModal = () => {
    dispatch(openWindow(true, id)); // передати обэктом нейм і емаэл з id
  };

  return (
    <div className={css.contenar}>
      <div className={css.contData}>
        <p className={css.page}>
          <FaUserAlt className={css.iconUser} size="20" />
          {name}
        </p>
        <p className={css.page}>
          <ImPhone className={css.iconPhone} size="20" />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handledDelete}>
        Delete
      </button>
      <button className={css.btnChang} onClick={openModal}>
        Change Contact
      </button>
    </div>
  );
}
