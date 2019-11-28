/**
 * BaikiemtraController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	detail: async function (req, res) {

		var id = req.param('id')*1;
	    if(isNaN(id)){
	    	return res.json({
		      status: 0,
		      id: req.param('id'),
		      msg: 'ko phai so',
		      data: ''
		    });
	    }

		var query = 'SELECT c.* FROM cau_trac_nghiem c, bai_kiem_tra b, bai_kiem_tra_cau_trac_nghiem bc WHERE b.id = '+id+' and b.id = bc.id_test and bc.id_question = c.id';
		Noidungcau.query(query, [] ,function(err, rawResult) {
		  if (err) { 
		  	sails.log(err); 
		  	return res.json({
		      status: 0,
		      id: req.param('id'),
		      msg: 'co loi xay ra',
		      data:''
		    });
		  }

		  sails.log(rawResult);

		  return res.json({
		      status: 1,
		      id: req.param('id'),
		      msg: 'Oke',
		      data:rawResult['rows']
		    });

		});

  }  

};

