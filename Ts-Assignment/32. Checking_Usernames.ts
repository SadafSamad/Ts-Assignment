let current_users: string[] =['HaMza','AnEeq','ZarGham','Umair','John'];

let new_users:string[] = ['A.samad','HaMza','Kamran','ZarGham','A.rehman'];

new_users.forEach(newUsername => {
 let lowerCase: string = newUsername.toLowerCase();

 if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
    console.log(`The username ${newUsername} is not available.please write a diffrent username`)
 }
else{
    console.log(`username ${newUsername} is available.`);
}
})
