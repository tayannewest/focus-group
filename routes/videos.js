
import { Router } from 'express'
import * as videoCtrl from '../controllers/videos.js'

const router = Router()

// localhost:3000/video
router.get('/', videoCtrl.index)

export {
  router
}
