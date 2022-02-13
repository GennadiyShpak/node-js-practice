// register - сохранение пользователя в БД
// authentification - проверка логина и пароля(credentials) пользователя на валидность
// authorization - проверка прав доступа к ресурсам сайта
const fs = require('fs/promises');
const path = require('path');

const express = require("express"); 
const cors = require('cors');
const {colors} = require('colors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const booksRouter = require('./routes/booksRoutes');
const errorHandler = require("./middlevares/error");
const {User} = require('./models');
const {
    badRegistrationCredentials,
    conflict,
    created,
    ok,
    notRegistered,
    unauthorized
} = require('./lib').HTTP_RESPONSES;

const connectDB = require('./config/db');
require('dotenv').config({path: './config/.env'});
const app = express();

app.use(express.json());
app.use(cors());

//Set routes
app.use('/api/v1/books', booksRouter)
app.use(errorHandler);

app.post('/register', async (req, res, next) => {
    // получаем данные от пользователя (credentials)
    // валидация полей
    // проверяем есть ли пользователь в БД
    // есть ли пользователь есть, сообщаем об ошибке
    // если пользователя нет, шифруем пароль
    // создаем пользователя в БД
    // генерируем токен пользователя
    // сохраняем пользователя в БД
    // отправляем ответ на фронт
    try {
        const { password, email, name } = req.body;
        if(!(email && password)) {
           return res.status(badRegistrationCredentials.code).send(badRegistrationCredentials.status);
        }

        const user = await User.findOne({email});

        if(user) {
            return res.status(conflict.code).send(conflict.status);
        }
        const hash = await bcrypt.hash(password, 3);
        const candidate = await User.create({email, password: hash, name}); // to instanciate
        
        const token = jwt.sign({user_id: candidate._id}, process.env.JWT_SECRET_KEY,{expiresIn: '8h'}) //optional
        candidate.token = token;
        candidate.status = 'VIP';
        await candidate.save();

        return res.status(created.code).send(created.status);
    } catch (error) {
        next(error)
    }
})

app.post('/login', async (req, res, next) => {
    // получаем данные от пользователя (credentials)
    // валидация полей
    // проверяем есть ли пользователь в БД
    // если пользователя нет, просим зарегистрироваться
    // есть ли пользователь есть, проверяем валидность логина и пароля
    // проверяем залогинен ли пользователь(проверяем токен на валидноть)
    // если токена нет в базе данных или он не валидный, но валидные данные пользователя, выдаем новый токен
    // отправляем ответ на фронт
   try {
        const { password, email } = req.body;
        if(!(email && password)) {
           return res.status(badRegistrationCredentials.code).send(badRegistrationCredentials.status);
        }

        const user = await User.findOne({email});
        if(!user) {
            return res.status(notRegistered.code).send(notRegistered.status);
        }

        // jwt.verify(user.token, process.env.JWT_SECRET_KEY, function(err, decoded) {
        //     console.log('decoded', decoded)
        // });
        const validToken = jwt.verify(user.token, process.env.JWT_SECRET_KEY, () => false);

        if(!validToken) {
            const token = await jwt.sign({user_id: user._id}, process.env.JWT_SECRET_KEY,{expiresIn: '8h'});
            user.token = token;
            await user.save();
        };

        return res.status(ok.code).json({
            responce: ok.status,
            token: user.token
        });
   } catch (error) {
        next(error)  
   }
})

app.get('/logout', async (req, res, next) => {
    // проверяем валидность токена из заголовков
    // расшифровываем токенб получаем из него user_id - это наш payload
    // если payload нет, значит токен не валидный
    // отправляем ответ на фронт
    try {
        const {authorization} = req.headers;
        if(!authorization) {
            return res.status(unauthorized.code).send(unauthorized.status);
        }
        const [Bearer, tokenFromHeaders = ''] = req.headers.authorization.split(' ');
        if(!tokenFromHeaders) {
            return res.status(unauthorized.code).send(unauthorized.status);
        }
        const {user_id} = jwt.verify(tokenFromHeaders, process.env.JWT_SECRET_KEY);
        await User.findByIdAndUpdate(user_id,{ token: null });
        return res.status(ok.code).send(ok.status)
    } catch (error) {
        next(error)
    }
    
})

connectDB();

const {PORT = 5050} = process.env;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.green.italic.bold); 
})

process.on('unhandledRejection', (err, _) => {
    if (err) {
        console.log(`${err.message}`.red);
        server.close(() => process.exit(50))
    }
})