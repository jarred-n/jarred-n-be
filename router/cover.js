import express from 'express'
import { Cover } from '../models/index'

const route = express.Router()

router.post('/covers', (req, res, next) => {
  try {
    res.header({
      status: true,
      time: new Date().getTime()
    })
    Cover.create(req.body, (err, cover) => {
      err ? res.json(err) : res.json(cover)
    })
  } catch (e) {
    next(e)
  }
})
