import * as fs from 'node:fs/promises';

// fs.readFile('db.json', { encoding: 'utf-8' })
//   .then((data) => {
//     const contacts = JSON.parse(data);

//     console.log(
//       contacts.map((contact) => ({
//         ...contact,
//         name: contact.name.toUpperCase(),
//       })),
//     );
//   })
//   .catch((err) => console.error(err));

const contacts = [{}, {}, {}, {}];

fs.writeFile('db.json', JSON.stringify(contacts, undefined, 2));
