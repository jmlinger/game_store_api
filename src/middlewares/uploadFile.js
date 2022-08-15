require('dotenv').config();

const multer = require('multer');
const crypto = require('crypto');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

const filename = (_req, file, callback) => {
  crypto.randomBytes(8, (err, hash) => {
    if (err) callback(err);

    const name = `${hash.toString('hex')}-${file.originalname}`;

    callback(null, name);
  });
};

const storageTypes = {
  local: multer.diskStorage({
    destination: (_req, _file, callback) => {
      callback(null, 'src/uploads');
    },
    filename,
  }),
  s3: multerS3({
    s3: new aws.S3(), // variável abrigatória que contem as configurações do cliente na plataforma. Esses configs estao definidas no arquivo .env e são lidas automaticamente pela classe S3. 
    bucket: 'game-store-image-upload',
    contentType: multerS3.AUTO_CONTENT_TYPE, // Download automático do arquivo predefinido quando a api é acessada. Essa config força o navegador a tentar ler o arquivo, caso não consiga faz o download.
    acl: 'public-read', // configura permissões. Predefinido como sem permissão de leitura.
    key: filename,
  }),
};

const config = {
  storage: storageTypes[!process.env.STORAGE ? 'local' : process.env.STORAGE],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (_req, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Invalid file type.'));
    }
  },
};

module.exports = multer(config).single('image');
