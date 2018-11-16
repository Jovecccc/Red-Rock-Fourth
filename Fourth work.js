第一题
function dig(obj,target) {
	for( key in obj ) {
		if (key===target) {
			console.log(obj[key]);
			if (obj[key] instanceof Object ){
				dig( obj[key], target );
			}

		} else {
			if (obj[key] instanceof Object ){
				dig( obj[key],target );
			}else{
				console.log(undefined);
			}
		}
	}
}
var data={
	level1:{
		level2:{
			level3:'some data'
		}
	}
}
dig(data,'level3')
第二题
function merge(obj1, obj2) {
	var d = {
		a : [ obj1.a , obj2.a ]
		b : [ obj1.b , obj2.b ]
		c : [ obj1.c , obj2.c ]
	}
	return d
}
var obj1 = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
  c: 'bar'
}
var obj2 = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo',
  d: 6
}
merge(obj1,obj2)