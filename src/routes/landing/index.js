import express from 'express'

import landing from './../../services/landing'

router.get('/', landing)

module.exports = router