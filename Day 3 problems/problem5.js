// rahul purchased items worth 4000 there is a equal deal of 10%discount if the bill is more than or equal to 3999 print got discount if he is eligible else print "not eligible":
let bill=4000;
let min_pur=3999;
if(bill>=min_pur){
  console.log("new bill amt", bill-bill*.10);
}else{
  console.log("not eligible");
}