// 'use strict';

{
    
    
        function judge() {

            const input_FizzNum = parseFloat(document.getElementById("FizzNum").value);//数値を取得
            const input_BuzzNum = parseFloat(document.getElementById("BuzzNum").value);//数値を取得
            const fbArray = [];
            
            if(Number.isInteger(input_FizzNum && input_BuzzNum) === true){
                for(let i = 1; i < 99; i++){
                    if(i % input_FizzNum === 0 && i % input_BuzzNum === 0) {
                        fbArray.push('FizzBuzz' + i);
                    } else if(i % input_FizzNum === 0) {
                        fbArray.push('Fizz' + i);
                    } else if(i % input_BuzzNum === 0) {
                        fbArray.push('Buzz' + i);
                    } 
                }
            } else {
                document.write("整数値ではありません");
            }
            
            
            const p = document.createElement('p');
            const body = document.querySelector('body');
            body.appendChild(p);
            // p.textContent = fbArray;
            p.textContent = fbArray.join('');
            
            
            
            

             // for(const v of fbArry) {
            //     fbText.push(`<p>${v}</p>`);
            // }

            // const fbHTML = fbText.join('');

            // fbResult.innerHTML = fbHTML;
        }


        

           
        

        document.querySelector('button').addEventListener('click', () => {
            judge();
        }); 

}
