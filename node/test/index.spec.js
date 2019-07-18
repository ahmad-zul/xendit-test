// external modules
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

// confgiure test library
chai.use(chaiHttp);

// set test env var
process.env.NODE_ENV = "test";

// create server
const server = require("../src/app.js");

describe("unit test to get orgs comment", () => {
  describe("GET /orgs/octokit/comments", () => {
    it("should return expected status", done => {
      chai
        .request(server)
        .get("/orgs/octokit/comments")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

describe("unit test to post orgs comment", () => {
  describe("POST /orgs/octokit/comments", () => {
    it("should return expected status", done => {
      chai
        .request(server)
        .post("/orgs/octokit/comments")
        .send({
          comment: "Looking to hire SE Asia’s top dev talent"
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

describe("unit test to delete orgs comment", () => {
  describe("DELETE /orgs/octokit/comments", () => {
    it("should return expected status", done => {
      chai
        .request(server)
        .delete("/orgs/octokit/comments")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

// describe("unit test to get orgs members", () => {
//   describe("GET /orgs/octokit/members", () => {
//     it("should return expected status", done => {
//       chai
//         .request(server)
//         .delete("/orgs/octokit/members")
//         .end((err, res) => {
//           res.should.have.status(200);
//           done();
//         });
//     });
//   });
// });