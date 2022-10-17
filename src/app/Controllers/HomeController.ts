import { Request, Response } from 'express'
import { env } from "../../bootstrap/Helpers";

class HomeController {
  public index({ res }: { res: Response }) {
    res.send({
      app_name: `${env('APP_NAME')}`
    })
  }

  public showHtml(req: Request, res: Response) {
    res.render('showHtml', {
      title: "網站測試"
    })
  }

  public sampleVue(req: Request, res: Response) {
    res.render('sampleVue', {
      title: "網站測試"
    })
  }
}

export default new HomeController()
