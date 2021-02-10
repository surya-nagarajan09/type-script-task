//revrese a string
let  reverse= (val:string):string  => {
  return val.split("").reverse().join("")
}
reverse("surya")

// to find leap year or not

let leap_yearOrNot = (year: number): boolean => {
  if ((year%400===0)||(year%4===0)&&(year%100!==0))
  {
    return true
  } else {
    return false;
  }
  
}
leap_yearOrNot(2002)

