import Box from "@mui/material/Box";
import { useId } from "react";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectId, selectIsOpen } from "../../redux/contacts/selectors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { closeWindow } from "../../redux/contacts/operations";
import { changeContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import css from "./ModalWindow.module.css";

export default function ModalWindov() {
  const isOpen = useSelector(selectIsOpen);
  const id = useSelector(selectId);
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const changeSubmit = (values, actions) => {
    dispatch(changeContact({ values, id }));
    actions.resetForm();
  };

  const closeModal = () => {
    dispatch(closeWindow(false));
  };

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={css.box}>
          <button className={css.btn} onClick={closeModal}>
            <svg fill="#055545" width="16" height="16">
              <use href="../../../images/icons.svg#close-btn"></use>
            </svg>
          </button>
          <Formik
            initialValues={initialValues}
            onSubmit={changeSubmit}
            validationSchema={FeedbackSchema}
          >
            <Form className={css.form}>
              <label className={css.name} htmlFor={nameFieldId}>
                Name
              </label>
              <Field
                className={css.input}
                type="text"
                name="name"
                id={nameFieldId}
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
              <label className={css.number} htmlFor={numberFieldId}>
                Number
              </label>
              <Field
                className={css.input}
                type="text"
                name="number"
                id={numberFieldId}
              />
              <ErrorMessage
                className={css.error}
                name="number"
                component="span"
              />
              <button type="submit">Сhange contact</button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
