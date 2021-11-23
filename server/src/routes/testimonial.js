const router = require('express').Router();
const {upload} = require('../helpers/upload.helper');
const {	getTestimonials,
		createTestimonial,
		updateTestimonial,
		deleteTestimonial
	  } = require('../controllers/testimonialController');


router.get('/testimonials',getTestimonials);

router.post('/testimonials',upload.single('pic'),createTestimonial);

router.put('/testimonials/:id',upload.single('pic'),updateTestimonial);

router.delete('/testimonials/:id',deleteTestimonial);

module.exports = router;