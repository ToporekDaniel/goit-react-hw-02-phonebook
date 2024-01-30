export const NameList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>{contact.name}</li>
      ))}
    </ul>
  );
};
