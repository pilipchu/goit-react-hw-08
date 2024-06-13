// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
// import ContactList from "../../components/ConatactList/ContactList";
// import ContactForm from "../../components/ContactForm/ContactForm";
// import { fetchContacts } from "../../redux/contacts/operations";
// import { selectIsLoading } from "../../redux/contacts/slice";

export default function ContactPage() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      {/* <ContactForm />
      <div>{isLoading && "Request in progress...."}</div>
      <ContactList /> */}
    </>
  );
}
