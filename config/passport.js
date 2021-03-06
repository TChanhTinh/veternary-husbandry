const LocalStrategy = require("passport-local").Strategy
const bcrypt = require('bcrypt')
const winston = require("winston")

module.exports = (passport, db) => {
    passport.use(new LocalStrategy((usernameField, passwordField, cb) => {
        db.query('SELECT id, username, password, type FROM users WHERE username=$1', [usernameField], (err, result) => {
            if (err) {
                winston.error('Error when selecting user on login', err)
                return cb(err)
            }

            if (result.rows.length > 0) {
                const first = result.rows[0]
                if (passwordField === first.password) {
                    cb(null, { id: first.id, username: first.username, type: first.type })

                } else
                    cb(null, false)
            }
            else {
                cb(null, false)
            }
        })
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, cb) => {
        db.query('SELECT id, username, type FROM users WHERE id = $1', [parseInt(id, 10)], (err, results) => {
            if (err) {
                console.log('Error when selecting user on session deserialize', err)
                return cb(err)
            }

            cb(null, results.rows[0])
        })
    })
}

