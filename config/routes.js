const express = require ('express')
const router = express.Router()
const contactController = require('../app/Controllers/contactController')
const classficationController = require('../app/Controllers/classificationController')
const {authenticateUser} = require('../app/Middleware/authentication')

router.get('/contact',authenticateUser, contactController.list)
router.get('/contact/:id',authenticateUser, contactController.show)
router.post('/contact',authenticateUser, contactController.create)
router.put('/contact/:id',authenticateUser, contactController.update)
router.delete('/contact/:id',authenticateUser, contactController.destroy)

router.get('/classification',authenticateUser, classficationController.list)
router.get('/classification/:id',authenticateUser, classficationController.show)
router.post('/classification',authenticateUser, classficationController.create)
router.put('/classification/:id',authenticateUser, classficationController.update)
router.delete('/classification/:id',authenticateUser, classficationController.destroy)

module.exports = router