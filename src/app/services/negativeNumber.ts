import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'negativeNumber'})

export class NegativeNumberPipe implements PipeTransform {
    transform(value: number): number { 
      // return Math.abs(value)*(-1);
      // return parseInt("+" + Math.abs(value)*(-1));
    // value = value ? value : 0
    // return value > 0 ? "+"+value : value
    // if (value > 0) {
    //     value = '+'+parseInt(value);
    //  }
    
     return  parseInt(value > 0 ? '+' + value : '' + value) ;

     

    // let sign = "+";
    // if (value > 0) {
    //     return parseInt("+" + value);
    // } else return value;

    }


  //   transform(value: number): unknown {
  //     const formattedValue = formatNumber(value, 'en', '1.0-2');
  //     value >= 0 ? formattedValue : `(${formattedValue.replace('-', '')})`;
  //  }


}


// var foo = 1;
// $scope.getData = function() {
//   if (foo > 0) {
//      foo = '+'+parseInt(foo);
//   }
//   return foo;