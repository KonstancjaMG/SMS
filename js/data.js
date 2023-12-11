const links = [
  { name: "Students", url: "students", status: '' },
  { name: "Classes", url: "classes", status: '' },
  { name: "Teachers", url: "teachers", status: '' },
];

const students = [
  { id: 1, name: 'Ethan', surname: 'Morrison', class: 'A1', dateOfBirth: '2008-05-10', address: '45 Oak Lane, Raccoon City', parentsContact: '555-1001' },
  { id: 2, name: 'Lila', surname: 'Harper', class: 'A1', dateOfBirth: '2007-11-22', address: '12 Maple Drive, Raccoon City', parentsContact: '555-1002' },
  { id: 3, name: 'Oliver', surname: 'Griffin', class: 'A1', dateOfBirth: '2009-03-15', address: '88 Birch Road, Raccoon City', parentsContact: '555-1003' },
  { id: 4, name: 'Sophia', surname: 'Knight', class: 'A1', dateOfBirth: '2008-07-30', address: '33 Elm Street, Raccoon City',  parentsContact: '555-1004' },
  { id: 5, name: 'Max', surname: 'Brooks', class: 'A1', dateOfBirth: '2007-09-14', address: '77 Pine Avenue, Raccoon City', parentsContact: '555-1005' },
  { id: 6, name: 'Amelia', surname: 'Wells', class: 'B1', dateOfBirth: '2009-01-06', address: '22 Willow Road, Raccoon City', parentsContact: '555-1006' },
  { id: 7, name: 'Noah', surname: 'Foster', class: 'B1', dateOfBirth: '2008-02-19', address: '18 Cedar Blvd., Raccoon City', parentsContact: '555-1007' },
  { id: 8, name: 'Chloe', surname: 'Bennett', class: 'B1', dateOfBirth: '2007-04-23', address: '67 Aspen Court, Raccoon City', parentsContact: '555-1008' },
  { id: 9, name: 'Aiden', surname: 'Cole', class: 'B1', dateOfBirth: '2009-06-11', address: '54 Spruce Street, Raccoon City', parentsContact: '555-1009' },
  { id: 10, name: 'Emma', surname: 'Reed', class: 'B1', dateOfBirth: '2008-08-20', address: '91 Oak Grove, Raccoon City', parentsContact: '555-1010' },
  { id: 11, name: 'Lucas', surname: 'Miller', class: 'A1', dateOfBirth: '2008-03-22', address: '15 Pine Street, Raccoon City', parentsContact: '555-1011' },
  { id: 12, name: 'Hannah', surname: 'Scott', class: 'A1', dateOfBirth: '2007-06-18', address: '28 Oak Lane, Raccoon City', parentsContact: '555-1012' },
  { id: 13, name: 'Isaac', surname: 'Taylor', class: 'A1', dateOfBirth: '2009-02-07', address: '39 Birch Road, Raccoon City', parentsContact: '555-1013' },
  { id: 14, name: 'Zoe', surname: 'Jones', class: 'A1', dateOfBirth: '2008-09-15', address: '42 Elm Street, Raccoon City', parentsContact: '555-1014' },
  { id: 15, name: 'Tyler', surname: 'White', class: 'A1', dateOfBirth: '2007-12-30', address: '55 Pine Avenue, Raccoon City', parentsContact: '555-1015' },
  { id: 16, name: 'Mia', surname: 'Evans', class: 'B1', dateOfBirth: '2009-05-21', address: '60 Willow Road, Raccoon City', parentsContact: '555-1016' },
  { id: 17, name: 'Elijah', surname: 'Brown', class: 'B1', dateOfBirth: '2008-01-11', address: '73 Cedar Blvd., Raccoon City', parentsContact: '555-1017' },
  { id: 18, name: 'Abigail', surname: 'Wilson', class: 'B1', dateOfBirth: '2007-08-29', address: '82 Aspen Court, Raccoon City', parentsContact: '555-1018' },
  { id: 19, name: 'Jacob', surname: 'Anderson', class: 'B1', dateOfBirth: '2009-10-14', address: '98 Spruce Street, Raccoon City', parentsContact: '555-1019' },
  { id: 20, name: 'Grace', surname: 'Thompson', class: 'B1', dateOfBirth: '2008-04-27', address: '105 Oak Grove, Raccoon City', parentsContact: '555-1020' }
];

const classLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const classes = [{id: 'A1', name: 'JavaScript 101' ,description: 'Placeholder'}, {id: 'B1', name: 'Python 101' ,description: 'Placeholder'}]

const teachers = [
  { id: 1, name: 'Leon', surname: 'Kennedy', address: '101 Raccoon St., Raccoon City', contactInfo: '555-3001', dateOfBirth: '1977-06-03', licenseId: 'LK-3001', subject: 'Math', class: "B1"},
  { id: 2, name: 'Chris', surname: 'Redfield', address: '202 Spencer Ave., Raccoon City', contactInfo: '555-3002', dateOfBirth: '1973-05-12', licenseId: 'CR-3002', subject: 'English', class: "B1"  },
  { id: 3, name: 'Jill', surname: 'Valentine', address: '303 Umbrella Way, Raccoon City', contactInfo: '555-3003', dateOfBirth: '1974-07-05', licenseId: 'JV-3003', subject: 'Physics', class: "B1"  },
  { id: 4, name: 'Claire', surname: 'Redfield', address: '404 Baker St., Raccoon City', contactInfo: '555-3004', dateOfBirth: '1979-01-29', licenseId: 'CR-3004', subject: 'Chemistry', class: "B1"  },
  { id: 5, name: 'Ada', surname: 'Wong', address: '505 Ashford Rd., Raccoon City', contactInfo: '555-3005', dateOfBirth: '1974-11-03', licenseId: 'AW-3005', subject: 'History', class: "B1" },
  { id: 6, name: 'Albert', surname: 'Wesker', address: '606 Spencer St., Raccoon City', contactInfo: '555-3006', dateOfBirth: '1960-03-24', licenseId: 'AW-3006', subject: 'Math', class: "A1" },
  { id: 7, name: 'Rebecca', surname: 'Chambers', address: '707 Kendo Rd., Raccoon City', contactInfo: '555-3007', dateOfBirth: '1975-11-20', licenseId: 'RC-3007', subject: 'English', class: "A1" },
  { id: 8, name: 'Carlos', surname: 'Oliveira', address: '808 Berkin Blvd., Raccoon City', contactInfo: '555-3008', dateOfBirth: '1976-10-15', licenseId: 'CO-3008', subject: 'Physics', class: "A1" },
  { id: 9, name: 'Barry', surname: 'Burton', address: '909 Valentine Ave., Raccoon City', contactInfo: '555-3009', dateOfBirth: '1960-08-20', licenseId: 'BB-3009', subject: 'Chemistry', class: "A1" },
  { id: 10, name: 'Sheva', surname: 'Alomar', address: '1010 Kennedy Rd., Raccoon City', contactInfo: '555-3010', dateOfBirth: '1986-02-16', licenseId: 'SA-3010', subject: 'History', class: "A1" }
];


export {links, students, classes, teachers, classLetters}