var express = require('express');
var router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('../models').user;
const flash = require('connect-flash');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


passport.use(new LocalStrategy(
    (username, password, done) => {
        users.findOne({
            where: {
                [Op.and]: {name: username, password: password}
            }
        }).then(user => {
            if (user) {
                return done(null, user);  // ログイン成功
            }
            throw new Error();
        })
        .catch(error => {
            return done(null, false, {message: '認証情報と一致するレコードがありません。'});
        })
    })
)
    

passport.serializeUser((user, done) => {
  console.log('Serialize ...');
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('Deserialize ...');
  done(null, user);
});

router.use(passport.initialize());
router.use(passport.session());
router.use(flash());

router.get('/', (req, res) => {
  console.log(req.session);
  res.render('login', {message: req.flash('error'), user: req.user});
});


router.post('/',
  passport.authenticate('local',
    {
      failureRedirect : 'login/failure',
      failureFlash: true,
      successRedirect : 'login/success'
    }
  )
);

router.get('/failure', (req, res) => {
  console.log(req.session);
  res.render('login',  {message: req.flash('error'), user: req.user});
});

router.get('/success', (req, res) => {
  console.log(req.session);
  res.redirect('/')
});


module.exports = router;