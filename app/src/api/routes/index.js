import express from 'express'
const router = express.Router()

// Middleware 

// Controllers
import accountController from 'controllers/accountController'

//------------ ACCOUNT ----------//
router.get('/account/check', accountController.check)
module.exports = router