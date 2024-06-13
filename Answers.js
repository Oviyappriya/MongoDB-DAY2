//Question 1:Find all the topics and tasks which are thought in the month of October.
db.topics.find({date:{$redex:"2023-10"}})
db.tasks.find({date:{$redex:"2023-10"}})

//Question 2:Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020.
db.companydrives.find({
    date: {
        $gt: ("2020-10-15"),
        $lt: ("2020-10-31")
    }
})

//Question 3:Find all the company drives and students who are appeared for the placement.
const drives = db.drives.find({}).toArray();
const emails = [];
drives.forEach((o) => o.students.forEach((e) => emails.push(e))); 
const appeardStudents = db.users.find({ email: { $in: emails } });

//Question 4:Find the number of problems solved by the user in codekata.
db.codekata.aggregate([{
    $match:{status:"solved"}
}])

//Question 5:Find all the mentors with who has the mentee's count more than 15.
db.mentors.find({count:{$gt:15}})

//Question 6:Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020.

db.tasks.find({attendence:{$eq:("absent")},dueDate:{$lt:("2023-10-31"),$gt:("2023-10-15")}})




