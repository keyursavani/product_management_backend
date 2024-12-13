const express = require("express")
const myroute = express.Router();
const connection = require('../db/dbconnection');

myroute.get("/", (req, resp) => {
 connection.query("select *from product", (err, data, fields) => {
  if (!err) {
   resp.status(200).send({ staus: 200, message: "success", data: data });
  } else {
   resp.status(500).send({ status: 500, message: "fails" })
  }
 })
});

myroute.get("/:pid", function (req, resp) {
 connection.query("select *from product where pid=?", [req.params.pid], function (err, data, fields) {
  if (!err) {
   resp.status(200).send({ status: 200, message: "success", data: data});
  }
  else {
   resp.status(404).send({ staus: 404, message: "error" });
  }
 });
})

myroute.post('/',(req,resp)=>{
 connection.query("insert into product values(?,?,?,?,?,?)",[req.body.pid,req.body.pname,req.body.price,req.body.qty,req.body.cid,req.body.sid],(err,data,fields)=>{
  if(!err){
   resp.status(200).send({status:200, message:"New product added"})
  }else{
   resp.status(500).send({status:500,message:"Error"})
  }
 })
})

myroute.put("/:id",(req,resp)=>{
 connection.query("update product set pname=?,price=?,qty=?,cid=?,sid=? where pid=?" ,[req.body.pname,req.body.price,req.body.qty,req.body.cid,req.body.sid,req.params.id],(err,data,fields)=>{
  if(!err){
   resp.status(200).send({status:200,message:"updated"});
  }
  else{
   resp.status(500).send("not updated");
  }
 })
})

myroute.delete("/:id",(req,resp)=>{
 connection.query("delete from product where pid=?",[req.params.id],(err,data,fields)=>{
  if(!err){
   resp.status(200).send({status:200,message:"deleted"});
  }else{
   resp.status(500).send("not deleted");
  }
 })
})
 
module.exports = myroute;