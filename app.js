var student1 = {
  rollNum: '313110',
  name: 'Syed Rafay',
  course: 'Web And Mobile',
  age: 17,
}

var student2 = {
  rollNum: '313111',
  name: 'Syed Nehal',
  course: 'Web And Mobile',
  age: 18,
}

var student3 = {
  rollNum: '313112',
  name: 'Syed Irshad',
  course: 'Web And Mobile',
  age: 12,
}

var student4 = {
  rollNum: '313113',
  name: 'Huzaifa',
  course: 'Web And Mobile',
  age: 18,
}

var student5 = {
  rollNum: '313114',
  name: 'Syed Bilal',
  course: 'Web And Mobile',
  age: 18,
}

var student6 = {
  rollNum: '313115',
  name: 'Askari Agha',
  course: 'Web And Mobile',
  age: 18,
}

var student7 = {
  rollNum: '313116',
  name: 'Rafay Aslam',
  course: 'Web And Mobile',
  age: 18,
}

var student8 = {
  rollNum: '313117',
  name: 'Ahmed Iqbal',
  course: 'Web And Mobile',
  age: 18,
}

var student9 = {
  rollNum: '313118',
  name: 'Hassaan',
  course: 'Web And Mobile',
  age: 15,
}

var student10 = {
  rollNum: '313119',
  name: 'Umer Siddique',
  course: 'Web And Mobile',
  age: 17,
}

var student11 = {
  rollNum: '313120',
  name: 'Hasan Rizvi',
  course: 'Web And Mobile',
  age: 18,
}

// Array Start
var array = [
  {
    rollNum: '313110',
    name: 'Syed Rafay',
    course: 'Web And Mobile',
    age: 17,
  },
  {
    rollNum: '313111',
    name: 'Syed Nehal',
    course: 'Web And Mobile',
    age: 18,
  },
  {
    rollNum: '313112',
    name: 'Syed Irshad',
    course: 'Web And Mobile',
    age: 12,
  },
  {
    rollNum: '313113',
    name: 'Huzaifa',
    course: 'Web And Mobile',
    age: 18,
  },
  {
    rollNum: '313114',
    name: 'Syed Bilal',
    course: 'Web And Mobile',
    age: 18,
  },
  {
    rollNum: '313115',
    name: 'Askari Agha',
    course: 'Web And Mobile',
    age: 18,
  },
  {
    rollNum: '313116',
    name: 'Rafay Aslam',
    course: 'Web And Mobile',
    age: 18,
  },
  {
    rollNum: '313117',
    name: 'Ahmed Iqbal',
    course: 'Web And Mobile',
    age: 18,
  },
  {
    rollNum: '313118',
    name: 'Hassaan',
    course: 'Web And Mobile',
    age: 15,
  },
  {
    rollNum: '313119',
    name: 'Umer Siddique',
    course: 'Web And Mobile',
    age: 17,
  },
  {
    rollNum: '313120',
    name: 'Hasan Rizvi',
    course: 'Web And Mobile',
    age: 18,
  },
]

var inp = document.getElementById("inp")
function searchRollNo() {
  // console.log(inp)
  for (let i = 0; i < array.length; i++) {
    if (inp.value == array[i].rollNum) {
      alert("Found")
      console.log(array[i]);
    }
  }
}

document.getElementById("inp").innerHTML = show



// JavaScript code
// function search_result() {
//   var input = document.getElementById('show').value
//   input=input.toLowerCase();
//   var x = document.getElementsByClassName('results');
    
//   for (i = 0; i < x.length; i++) { 
//       if (!x[i].innerHTML.toLowerCase().includes(input)) {
//           x[i].style.display="none";
//       }
//       else {
//           x[i].style.display="list-item";                 
//       }
//   }
// }