// 'use strict';

{
    
    
        function judge() {

            const input_FizzNum = parseFloat(document.getElementById("FizzNum").value);//数値を取得
            const input_BuzzNum = parseFloat(document.getElementById("BuzzNum").value);//数値を取得
            
            
            if(Number.isInteger(input_FizzNum && input_BuzzNum) === true){
                for(let i = 1; i < 99; i++){
                    if(i % input_FizzNum === 0 && i % input_BuzzNum === 0) {
                        const p = document.createElement('p');
                        p.textContent = 'FizzBuzz' + i;
                        const body = document.querySelector('body');
                        body.appendChild(p);
                    } else if(i % input_FizzNum === 0) {
                        const p = document.createElement('p');
                        p.textContent = 'Fizz' + i;
                        const body = document.querySelector('body');
                        body.appendChild(p);
                    } else if(i % input_BuzzNum === 0) {
                        const p = document.createElement('p');
                        p.textContent = 'Buzz' + i;
                        const body = document.querySelector('body');
                        body.appendChild(p);
                    } 
                }
            } else {
                const p = document.createElement('p');
                p.textContent = '整数値を入力してください';
                const body = document.querySelector('body');
                body.appendChild(p);
            }
            
            
        }


        

           
        

        document.querySelector('button').addEventListener('click', () => {
            judge();
        }); 

}
