// var bill = 10.25 + 3.99 + 7.15;
// var tip = bill*0.15;
// total = bill + tip;

// console.log((total.toFixed(2)));

// var number = 14;

// if(number % 2 === 0) {
//     console.log('Your number is Even');
//     } else {
//     console.log('Your number is Odd');
//     };

// var musicians = 5;

//     if(musicians <= 0) {
//         console.log('Not a group');
//         } else if(musicians === 1) {
//         console.log('Solo');
//         } else if(musicians === 2) {
//             console.log('Duet');
//         } else if(musicians === 3) {
//             console.log('trio');
//         } else if(musicians === 4) {
//             console.log('quartet');
//         } else if(musicians > 4) {
//             console.log('this is a large group')
//         }; 

    

    var balance = -20;
    var checkBalance = true;
    var isActive = true;

    if(!checkBalance) {
        console.log('Thank you. Have a nice day');
        } else if(isActive === true && balance > 0) {
        console.log('Your balance is $' + balance);
        } else if(!isActive) {
            console.log('Your account is no longer active');
        } else if(balance === 0) {
            console.log('Your account is empty');
        } else {
            console.log('Your balance is negative. Please contact bank');
        };





        let i = 1;

        while (i <= 20) {
            
        if(i % 3 === 0){
            console.log('Julia');
        } else if(i % 5 ===0) {
            console.log('James');
        } else if(i % 3 ===0 && i % 5 === 0){
            console.log('JuliaJames');
        } else {
            console.log(i)
        }
        i++;
        };






        function laugh(num) {
            var ha = "";
            for (let i = 0; i < num; i++){
                ha = ha + 'ha';
            }     
            return ha + '!';
        }
        console.log(laugh(4));


    var rainbow = ['red', 'orange', 'blackberry', 'blue'];
    rainbow.splice(-2,0);

    rainbow.splice(2,1, 'Yellow','Green')
    rainbow.splice(5,1,'purple')
    console.log(rainbow);



    var donuts = [
        { type: "Jelly", cost: 1.22 },
        { type: "Chocolate", cost: 2.45 },
        { type: "Cider", cost: 1.59 },
        { type: "Boston Cream", cost: 5.99 }
     ];
    
    donuts.forEach(function(donut){
        console.log(donut.type + 'donuts cost $' + donut.cost + ' each');
    });

     
    




