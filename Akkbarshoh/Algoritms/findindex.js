users = [
	{age:11,name:'Asan'},
	{age:12,name:'Hasan'},
	{age:13,name:'Masan'},
	{age:14,name:'Nuran'},
	{age:15,name:'Malan'},
	{age:16,name:'Tsan'},
	{age:17,name:'Nisan'},
]

const index = users.findIndex(item=>item.age === 14)
console.log(index)