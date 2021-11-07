import { Router } from 'express'
import * as ideasCtrl from '../controllers/ideas.js'

const router = Router()


// localhost:3000/ideas
router.get('/', ideasCtrl.index)
// localhost:3000/ideas/new
router.get('/new', ideasCtrl.new)

export {
  router
}
