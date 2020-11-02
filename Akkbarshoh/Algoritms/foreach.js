users = [
	{age:11,name:'Asan'},
	{age:2,name:'Hasan'},
	{age:13,name:'Masan'},
	{age:14,name:'Nuran'},
	{age:5,name:'Malan'},
	{age:16,name:'Tasan'},
	{age:17,name:'Nisan'},
]


users.forEach( function(item) {
	item.age=item.age+10
	if(item.age>=23){
		console.log('Взрослый')
	}else{
		console.log('Маленький')
	}
});

console.log(users)