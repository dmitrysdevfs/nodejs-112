import path from 'node:path';

import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('src', 'tmp'));
  },

  filename: function (req, file, cb) {
    const uniquPrefix = Date.now() + '-' + Math.round(Math.random() * 1e9);

    cb(null, uniquPrefix + '-' + file.originalname);
  },
});

export const upload = multer({ storage });
