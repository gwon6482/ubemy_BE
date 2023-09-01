// promise객체 생성 및 적용

// Auth 함수
// promise 객체를 반환하는 함수
// 매개변수인 password가 일치할 경우 resolve함수 아닌경우 reject함수를 실행
// resolve함수는 then()의 콜백함수에 data 전달
// reject함수는 catch()의 콜백함수에 에러 원인 전달


const Auth = (password) => {
    const data = 'ASD123!@#'
    const promise = new Promise((resolve,reject)=>{

        if (password === 'abcd1234') {
            resolve(data);
        }
        else {
            reject('value is not positive num');
        }
    })
    return promise;
}

// 최초 then은 요청이 성공할 경우 데이터를 받아서 전달
// 이후의 then은 이전 then의 return 값 받음
Auth('abcd1234')
    .then((data)=>{
        console.log('data: ',data)
        return data+'KK'
    })
    .then((data)=>{
        console.log('1st Refine: ',data)
        return data+'ll'
    })
    .then((data)=>{
        console.log('2nd Refine: ',data)
    })
    .catch((e)=>{
        console.log(e)
    });


// +콜백지옥 예제
function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
doOperation();
  