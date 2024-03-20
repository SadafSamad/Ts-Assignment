let guest_list :string[] = ['Imran Khan','Nawaz Shrif','Asif Ali Zardari'];
// for(let i=0; i<guest_list.length; i++){
// console.log('Dear Mr. ' + guest_list [i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_guest :string = 'Imran Khan';
let new_guest :string = 'Kamran Tessori';
guest_list[0] = new_guest;

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our plearsure to invite you in our party.\n\nThank You!\n\n')
// }

// console.log(`Mr.${absent_guest} is not coming to the party.`);
// console.log('Good news!we find Big Table so we are inviting 3 more guest.')

//array me 3 guest add kiye hein.
guest_list.unshift('sir zia khan');
guest_list.splice(2, 0 , 'Maryam nawaz');
guest_list.push('bilawal bhutto zardari');

//Yahan per men 6 guest ke array ko print kraya he.
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our plearsure to invite you in our party.\n\nThank You!\n\n')
// }

//sorry message to guest for not inviting.
//console.log('\nsorry we can not arrang big table ,only Two people will be invited.');

//Yahan per mene guest remove kiye hein.
// while( guest_list.lenght > 2){
//    let remove_Guest = guest_list.pop();
//    console.log (sorry Mr. ${remove_guest},You are not invited for dinner  )
// }

while (guest_list.length > 2) {
    let remove_Guest = guest_list.pop();
    // console.log(`Sorry Mr. ${remove_Guest}, you are not invited for dinner.`);
 }

 //Hamare bache howe 2 invited guest.

 //for(let i=0; i< guest_list.length; i++){
   // console.log('Dear Mr.' +   guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
 // }

//mene sare guest array se remove kar diye.
 guest_list.splice(0,2);
 console.log( guest_list);

 //Exercise 19 

 //print a message inicating the number of people you are inviting to dinner.

 console.log(`Total number of Guest Are:${guest_list.length}`);





 