users = [
	{age:11,name:'Asan'},
	{age:2,name:'Hasan'},
	{age:13,name:'Masan'},
	{age:14,name:'Nuran'},
	{age:5,name:'Malan'},
	{age:16,name:'Tasan'},
	{age:17,name:'Nisan'},
]

let maxNum = 0

users.forEach((item)=>{
	if(item.age>maxNum){
		maxNum=item.age
	}
})
console.log(maxNum)