users = [
	{age:11,name:'Asan'},
	{age:2,name:'Hasan'},
	{age:13,name:'Masan'},
	{age:14,name:'Nuran'},
	{age:5,name:'Malan'},
	{age:16,name:'Tasan'},
	{age:17,name:'Nisan'},
]


// users.forEach((item)=>{
// 	if(item.age>13){
// 		item.access = true
// 	}else{
// 		item.access = false
// 	}
// })

// console.log(users)

usersage =[]

users.forEach((item)=>{
	usersage.push(item.age)
})

console.log(usersage)