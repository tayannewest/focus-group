import { Router } from 'express'
import * as ideasCtrl from '../controllers/ideas.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// localhost:3000/ideas
router.get('/', ideasCtrl.index)
// localhost:3000/ideas/new
router.get('/new', ideasCtrl.new)
// localhost:3000/ideas/:id
router.get('/:id', ideasCtrl.show)
// localhost:3000/ideas
router.post('/', isLoggedIn, ideasCtrl.addFeature)

export {
  router
}
