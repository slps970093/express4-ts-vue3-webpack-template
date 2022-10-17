import express from 'express'
import { Express } from 'express'
import cors from 'cors'
import * as bodyParser from 'body-parser'

import appConfig from '../config/app'
import apiRoute from '../routes/api'
import corsConfig from '../config/cors'
import * as path from "path";
// @ts-ignore
import swig from "swig";

class App {
  public app: Express = express()

  constructor() {
    this.app
      .use(cors(corsConfig))
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: true }))
      .use('/static',express.static( path.join(process.cwd(), '/static').toString()))
      .use('/assets',express.static( path.join(process.cwd(), '/assets').toString()))
      .use('/', apiRoute)
      .set('views',path.join(process.cwd(), '/views'))
      .set('view engine', 'html')
      .set('view cache', false)
      .engine('html', swig.renderFile);


    swig.setDefaults({ cache: false });
  }

  initServer() {
    this.app.listen(appConfig.port, () => console.log(`Your ${appConfig.name} is running on http://localhost:${appConfig.port}`))
  }
}

export default new App()
