const books = require('./books');

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case 'read': {
      const allBooks = await books.getAll();
      return console.log(allBooks);
    }

    case 'getById': {
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    }

    case 'add': {
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    }

    case 'updateById': {
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    }

    case 'deleteById': {
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
    }

    default:
      return console.log('Unknown action');
  }
};

// invokeAction({ action: 'read' });
// invokeAction({ action: 'getById', id: 'ck89qe3HriUDHe09TBoJ8' });
// invokeAction({ action: 'add', title: 'Worm', author: 'John C. McCrae' });
// invokeAction({
//   action: 'updateById',
//   id: '1746235370271',
//   title: 'Ward',
//   author: 'John C. McCrae',
// });
// invokeAction({ action: 'deleteById', id: '1746235370271' });

const actionIndex = process.argv.indexOf('--action');
const idIndex = process.argv.indexOf('--id');
const titleIndex = process.argv.indexOf('--title');
const authorIndex = process.argv.indexOf('--author');

if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  const id = idIndex !== -1 ? process.argv[idIndex + 1] : undefined;
  const title = titleIndex !== -1 ? process.argv[titleIndex + 1] : undefined;
  const author = authorIndex !== -1 ? process.argv[authorIndex + 1] : undefined;

  if (action === 'add' && (!title || !author)) {
    console.error(
      '❌ Error: To add a book, you must provide --title and --author.',
    );
    process.exit(1);
  }

  if (['getById', 'updateById', 'deleteById'].includes(action) && !id) {
    console.error(
      `❌ Error: The action '${action}' require an --id parameter.`,
    );
    process.exit(1);
  }

  invokeAction({ action, id, title, author });
}
