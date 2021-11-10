import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/profiles - GET
router.get("/", profilesCtrl.index)
// localhost:3000/profiles/:id - GET
router.get("/:id", profilesCtrl.show)



export {
  router
}
