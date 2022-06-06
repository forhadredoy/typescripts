interface student {
  name: string;
  age: number;
  fathename: string;
  mothername: string;
  addres: string;
  phone: number;
  rool: number;
  subject: string;
  roadno: number | string;
  homeno: number | string;
}

interface teacher {
  name: string;
  age: number;
  fathename: string;
  mothername: string;
  addres: string;
  phone: number;
  subject: string;
  roadno: number | string;
  homeno: number | string;
  education: string;
}

let myFunction = (sum: [student, teacher]) => {
  return sum;
};

let myObj = {
  name: "forhad hossain",
  age: 33,
  fathename: "md sholaiman",
  mothername: "jannatul",
  addres: "dhaka",
  phone: 12345,
  rool: 940926,
  subject: "math",
  roadno: 1200,
  homeno: "belayet-1200",
};

let myObj1 = {
  name: "belayet hossain",
  age: 30,
  fathename: "sogir ahmed",
  mothername: "bibi khadija",
  addres: "feni",
  phone: 12345,
  subject: "programming",
  roadno: "nolvog road",
  homeno: 1200,
  education: "Bsc engineer",
};

console.log(myFunction([myObj, myObj1]));
