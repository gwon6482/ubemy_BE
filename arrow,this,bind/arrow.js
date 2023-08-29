class NameFiled {
    constructor(name){
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field)
    }
}

class NameGenerator {
    constructor() {
        console.log(this)
        const btn = document.querySelector('button');
        this.name = 'Max'

        // 오류1 : 최초 1회 실행되고 이후 실행되지 않는다.
        // btn.addEventListener('click', this.addName() });

        // 오류2 : 버튼을 누를 떄마다 실행은 되나 addName에서의 this가 의도한 대로 NameGenerator객체를 가리키지 않는다.
        // btn.addEventListener('click', this.addName });

        // 오류3 : 익명함수를 사용하면 마찬가지로 누를때마다 실행은 되나 this문제가 해결되지 않음
        // btn.addEventListener('click', function() { this.addName() } });


        // es6 이전의 해결방법
        // btn.addEventListener('click', this.addName.bind(this));
        // bind함수를 이용하면 해당 이벤트를 호출될때 실행되는 addName에서의 this가 지금에서의 this와 같음


        //es6 이후의 해결방법
        btn.addEventListener('click',
        () => { this.addName() }
        )
        // 화살표함수를 사용하면 bind없이도 해당 호출 함수에서의 this가 현재 객체에서 this임
    }

    addName() {
        // 다른 메서드에서의 this 키워드도 NameGenerator의 this이여야 올바르게 작동한다. 
        console.log(this)
        const name = new NameFiled(this.name);
    }
}

const gen = new NameGenerator();