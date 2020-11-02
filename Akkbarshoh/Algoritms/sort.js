users = [
	{age:11,name:'Asan'},
	{age:2,name:'Hasan'},
	{age:13,name:'Masan'},
	{age:14,name:'Nuran'},
	{age:5,name:'Malan'},
	{age:16,name:'Tasan'},
	{age:17,name:'Nisan'},
]

const sortedUsers = []
const length = users.length
for(let i =0; i<length; i++){
	const min = users.reduce((min,item)=>{
		if(min.age > item.age){
			return item
		}
		return min
	})
	const index = users.findIndex((item)=>item===min)
	users.splice(index,1)
	sortedUsers.push(min)
}
console.log(sortedUsers)



// const min = users[0]
// const length = users.length

// for(let i=0; i<length; i++){
// 	const min = users[i]
// 	for(let e=0; e<length; e++){
// 		const item = users[e]
// 		if(min.age > item.age){
// 			users[i] = item
// 			users[e] = min
// 		}
// 	}
// }
// console.log(users)