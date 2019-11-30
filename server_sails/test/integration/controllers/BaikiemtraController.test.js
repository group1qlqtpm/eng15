var supertest = require("supertest");
var sails = require("sails");

describe("BaikiemtraController.detail", function() {
  describe("#detail()", function() {
    it("should get test detail", function(done) {
      supertest(sails.hooks.http.app)
        .get("/baikiemtra/detail?id=1")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);

          done();
        });
    });
  });
});
