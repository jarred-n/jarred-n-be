const express = require('express')
const router = express.router()

import { Ariticle } from '../models'

//Get articles by pages
router.get('/articles/page/:page', async (req, res, next) => {
  try {
    const result = await Article.find()
      .skip((req.params.page - 1) * 10)
      .limit(10)
      .sort({ _id: -1 })
    const count = await Article.countDocuments()
    return res.header({   
        Status: true,
        Time: new Date().getTime(),
        Version: _config2.default.version,
        Amount: count
      }).status(200).json(result);
  } catch (e) {
    return next(e)
  }
})
