const dateValue = new Date();
const currentHour = dateValue.getHours();

if(currentHour > 16 ){
    console.log(`Good evening .. `);
}else if(currentHour >= 12 && currentHour <= 16){
    console.log(`Good afternoon ..`);
}else{
    console.log(`Good morning ..`);
}