/*
english_test_manager
cau_trac_nghiem
*/
insert into cau_trac_nghiem values(1,"What is the highest among the answer below?","5 centimeters","20 meters","200 centimeters","100 decimeters","B");
insert into cau_trac_nghiem values(2,"What was the matter with him? He........ a toothache","to have","have","has","had","D");
insert into cau_trac_nghiem values(3,"What subject is he......... now? Vietnamese.","to learn","learn","learning","learned","C");
insert into cau_trac_nghiem values(4,"......... did she go yesterday morning? She went to the bookshop.","What","Where","When","Why","B");
insert into cau_trac_nghiem values(5,"Are you free........ the evening? Yes, I am.","in","on","at","to","B");
insert into cau_trac_nghiem values(6,"She is going to......... television tonight.","sing","play","stay","watch","D");
insert into cau_trac_nghiem values(7,"......... is that ? It's my teacher.","What","Who","Where","How","B");
insert into cau_trac_nghiem values(8,"Does she like sandwiches ?.................","Yes, she do","Yes, she is","Yes, she does","Yes, she like","C");
insert into cau_trac_nghiem values(9,"This is Mai.............. mother is a doctor.","his","she","her","he","C");
insert into cau_trac_nghiem values(10,"She............. a banana.","wants","want","to want","wantes","B");
/*
lop
*/
insert into lop values(1);
insert into lop values(2);
insert into lop values(3);
insert into lop values(4);
insert into lop values(5);
/*
loai_bai_kiem_tra
*/
insert into loai_bai_kiem_tra values(1,"TN",1,10);
/*
bai_kiem_tra
*/
insert into bai_kiem_tra values(1,1,1);
/*
bai_kiem_tra_cau_trac_nghiem
*/
insert into bai_kiem_tra_cau_trac_nghiem values(1,1);
insert into bai_kiem_tra_cau_trac_nghiem values(2,2);
insert into bai_kiem_tra_cau_trac_nghiem values(1,3);
insert into bai_kiem_tra_cau_trac_nghiem values(1,4);
insert into bai_kiem_tra_cau_trac_nghiem values(1,5);
insert into bai_kiem_tra_cau_trac_nghiem values(1,6);
insert into bai_kiem_tra_cau_trac_nghiem values(1,7);
insert into bai_kiem_tra_cau_trac_nghiem values(1,8);
insert into bai_kiem_tra_cau_trac_nghiem values(1,9);
insert into bai_kiem_tra_cau_trac_nghiem values(1,10);

	CREATE TABLE IF NOT EXISTS `english_test_manager`.`bai_kiem_tra_cau_trac_nghiem` (
  `id_test` INT NOT NULL,
  `id_question` INT NOT NULL,
  `id_bai` INT NOT NULL,
  PRIMARY KEY (`id_test`, `id_question`))
ENGINE = InnoDB;



