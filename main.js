// 'use strict';

{
    
    function judge() {

        var input_FizzNum = parseFloat(document.getElementById("FizzNum").value);//数値を取得
        var input_BuzzNum = parseFloat(document.getElementById("BuzzNum").value);//数値を取得
        // const number = document.querySelector("input");
        // document.write(number.value);
        // number.value = " ";
        // number.focus();
        


        
        if(Number.isInteger(input_FizzNum) === true){
            result = [];

            for(let i = 1; i < 100; i ++){
                result.push(i * input_FizzNum);
            }
            return result;
            document.write(result); 
            // for(let i = 1; i < 100; i ++){
            //     result.push(i * input_BuzzNum);
            // }
        }else{
            document.write("整数値ではありません");
        }

       
            // for(let i = 1; i < 100; i ++){
                
            //     if(i * input_FizzNum %　input_FizzNum === 0　 && i * input_BuzzNum / input_BuzzNum  === 0){
            //         // console.log(input_FizzNum * i);
            //         result.push(i * input_FizzNum);
            //         // document.write(result);
                    
            //     }
            //     else if(i *input_FizzNum % input_FizzNum === 0){
            //         // console.log(input_FizzNum * i);
            //         result.push(i * input_FizzNum);
            //         // document.write(result);
            //     }
            //     else if(i *input_BuzNum % input_BuzzNum === 0){
            //         // console.log(input_FizzNum * i);
            //         result.push(i * input_BuzzNum);
            //         // document.write(result);
            //     }
            // }

                  
    }

            
           
            

    // var p = document.createElement('p');
    // p.textContent = result;
    // document.body.appendChild(p);

        // }else{
        //     console.log("整数を入力してください")
        // }
   

   

        // document.querySelector('.button').addEventListener('click', judge);
    // document.write(judge());
    document.querySelector('.button').addEventListener('click', () => {
        document.getElementById("output").textContent = judge();
    });       
    

   
 
}
