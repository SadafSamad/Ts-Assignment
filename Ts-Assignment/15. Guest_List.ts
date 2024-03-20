

let guest_list :string[] = ['Imran Khan','Nawaz Shrif','Kamran Tessori'];

for(let i=0; i<guest_list.length; i++){

console.log('Dear Mr. ' + guest_list [i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n')

}

let absent_guest :string[] = ['Asif Ali Zardari'];

let message :string = (`${absent_guest} is not comming in our party!`)

console.log(message);