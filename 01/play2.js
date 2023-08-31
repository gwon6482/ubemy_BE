const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Done!')
        },1500);
    });
    return promise;
}

// 비동기코드 : 실행되는데 시간이 소요되므로 바로 실행되지 않는 코드
setTimeout(()=>{
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text)
            return fetchData();
        })
        .then(
            text2 => {
                console.log(text2)
            }
        )
},2000);

// 동기화 코드 : 바로 실행됨
console.log('Hello!');
console.log('Hi!');




/**
 *  비동기코드 : 일정'시간'을 소모하는 코드
 * 비동기 함수는 실행을 미뤄두고 다음 코드로 넘어감
 * 
 * 1. setTimeout함수를 인지
 * 2. 콜백함수 안의 내용을 읽음
 * 3. 2000ms를 기다림
 * 4. 뒤의 코드 미리 실행
 * 5. 2000ms 가 끝남 -> 콜백함수 실행
 */