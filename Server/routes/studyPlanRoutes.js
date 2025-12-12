import express from 'express';
import { createStudyPlan,getStudyPlan ,editStudyPlan,deleteStudyPlan} from '../controllers/studyPlanController.js'

const router = express.Router();


router.post('/studyplan', createStudyPlan);
router.get('/studyplan', getStudyPlan);
router.put('/studyplans/:id', editStudyPlan);
router.delete('/studyplan/:id', deleteStudyPlan);

export default router;