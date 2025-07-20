import Contact from "./Contact";

function ContactList({contacts}) {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
