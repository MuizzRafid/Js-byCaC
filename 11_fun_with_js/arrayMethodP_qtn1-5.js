const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1998",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

//1.question:What is the avarage income of all the people in the array?

const avarageIncome = () => {
  return (
    people.reduce((acc, curItem) => {
      return (acc = acc + Number(curItem.salary));
    }, 0) / people.length
  );
};

//console.log(avarageIncome());

//2.question:Who are the people that are currently older than 35?

const olderThan = () => {
  return people.filter(
    (ele) => new Date().getFullYear() - new Date(ele.DOB).getFullYear() > 35
  );
};

//console.log(olderThan());

//3.question:Get a list of the people's full name (firstName and lastName).

const fullName = () => {
  people.map((person) => `${person.firstName} ${person.lastName}`);
};

//console.log(fullName());

//another way

const fullName2 = () => {
  return people.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

//console.log(fullName2());

//04.question:Get a list of people in the array ordered from youngest to oldest.

const youngestToOlderest = () => {
  return people
    .map(
      (person) => new Date().getFullYear() - new Date(person.DOB).getFullYear()
    )
    .sort((a, b) => a - b);
};
//console.log(youngestToOlderest());

//05.question:How many people are there in each department?
const departmentCount = () => {
  return people.reduce(
    (acc, person) => ({
      ...acc,
      [person.department]: acc[person.department] + 1 || 1,
    }),
    {}
  );
};

console.log(departmentCount());
//06.question:
