import React, { useState } from "react";

interface Contact {
    name: string;
    email: string;
}

const contacts = [
    { name: 'Taylor', email: 'taylor@gmail.com' },
    { name: 'Alice', email: 'alice@gmail.com' },
    { name: 'Bob', email: 'bob@gmail.com' },
];

export function ContactList({ contacts, onSelect }: { contacts: Contact[], onSelect: (contact: Contact) => void }) {
    return (
        <section className="contact-list">
            <ul className="contact-list">
                {contacts.map(contact =>
                    <li key={contact.email}>
                        <button
                            className="text-xs bg-blue-400 rounded p-1 m-2 text-white"
                            onClick={() => { onSelect(contact); }}>
                            {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}

export function Chat({ contact }: { contact: Contact }) {    
    const [text, setText] = useState('');
    return (
        <section className="chat m-2">
            <textarea
                rows={5}
                value={text}
                placeholder={'Mengobrol dengan ' + contact.name}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <button className="text-xs bg-gray-400 rounded px-2 py-1 m-2 text-blue-800">Kirim ke {contact.email}</button>
        </section>
    );
}

export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);
    return (
        <div>
            <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">List Kontak</th>
                        <th scope="col" className="px-6 py-3">Pesan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ContactList
                                contacts={contacts}
                                onSelect={contact => setTo(contact)}
                            />
                        </td>
                        <td>
                            <Chat key={to.email} contact={to} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}