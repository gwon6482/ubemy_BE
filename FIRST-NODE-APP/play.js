const person  = {
    name: 'Max',
    age : 29,
    greet() {
        console.log('Hi, I am' + this.name);
    }
}

// 객체 구조 분해
// {}안에 필요한 속성,메소드만 분리하여 사용
const printName = ( {name} ) => {
    console.log(name);
}

printName(person)


// 구조분해를 이런식으로도 사용가능하다.
const {name,age} = person
console.log(name,age)

const hobbies = ['sports','cookig']

const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2)