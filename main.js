// 'use strict';

{
    
    
        function judge() {

            var input_FizzNum = parseFloat(document.getElementById("FizzNum").value);//数値を取得
            var input_BuzzNum = parseFloat(document.getElementById("BuzzNum").value);//数値を取得
            

            if(Number.isInteger(input_FizzNum && input_BuzzNum) === true){
                let arrayFizz = [];
                for(let i = 1; i < 100; i ++){
                    arrayFizz.push(i * input_FizzNum);
                }
    
                let arrayBuzz = [];
                for(let i = 1; i < 100; i ++){
                    arrayBuzz.push(i * input_BuzzNum);
                }
            
                var arrayFizzBuzz = arrayFizz.concat(arrayBuzz);
    
                arrayFizzBuzz = items.filter( function( value ) {
 
                    //5よりも小さい数値だけを抽出
                    return value < 100;
                 
                });
                // arrayFizzBuzz.filter(function(x, i, self) {
                //     return self.indexOf(x) === i;
                // });
                // var array = [1,2,3,3,2,2,5,10,10,10];

                // array.filter(function (x, i, self) {
                // return self.indexOf(x) === i;
                // });

                // console.log(b); // [ 1, 2, 3, 5, 10]




                arrayFizzBuzz.forEach(number => {
                    if(number % input_FizzNum === 0 && number % input_BuzzNum === 0){
                        document.write(`FizzBuzz ${number}\n`);
                    }else if(number % input_FizzNum === 0){
                        document.write(`Fizz ${number}\n`);
                    }else if(number % input_BuzzNum === 0){
                        document.write(`Buzz ${number}\n`);
                    }
                });
            } else {
                document.write("整数値ではありません");
            }
        }

        document.querySelector('.button').addEventListener('click', () => {
            document.getElementById("output").textContent = judge();
        }); 

        
        // if(Number.isInteger(input_FizzNum) === true){
        //     result = [];
            

            // for(let i = 1; i < 100; i ++){
            //     if(i % input_FizzNum === 0 && i % input_BuzzNum === 0){
            //         document.write(i * input_FizzNum * input_BuzzNum);
            //         // result.push(i * input_FizzNum * input_BuzzNum);
            //     } else if(i % input_FizzNum === 0){
            //         // result.push(i * input_FizzNum);
            //         document.write(i * input_FizzNum);
            //     } else if(i % input_BuzzNum === 0){
            //         // result.push(i * input_BuzzNum);
            //         document.write(i * input_BuzzNum);
            //     }
            // }
        //     return result;
        //     var f = function (a, b) {
        //         return a - b
        //     }
        //     document.write(result.sort(f));
        // }else{
        //     document.write("整数値ではありません");
        // }


       
            // var b = arrayFizzBuzz.filter(function (x, i, self) {
            //         return self.indexOf(x) === i;重複をなくす
            //     });
                // for(let i = 1; i < 100; i ++){
                //     result.push(i * input_FizzNum);
                // }
                // return result;
                // document.write(result); 
                // // for(let i = 1; i < 100; i ++){
                // //     result.push(i * input_BuzzNum);
                // // }
           
    
            

        

       
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

                  
    

            
           // const number = document.querySelector("input");
            // document.write(number.value);
            // number.value = " ";
            // number.focus();
            
            

    // var p = document.createElement('p');
    // p.textContent = result;
    // document.body.appendChild(p);

        // }else{
        //     console.log("整数を入力してください")
        // }
   

   

        // document.querySelector('.button').addEventListener('click', judge);
    // document.write(judge());
         
    

   
 
}
