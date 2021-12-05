const express = require('express')

const { getExternalLights } = require('../controllers/externalLights')

const router = require('express').Router()

router.route('/')
    .get(getExternalLights)

module.exports = router