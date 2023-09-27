//duyệt mảng
let jobs = ["Java","react","angular","vuejs"]
// for (let i = 0; i < jobs.length; i++) {
//     console.log(jobs[i]);
// }

// for..in:sử dụng index để duyệt mảng
for(let index in jobs){
    console.log(jobs[index],index);
}

// for..of:sử dụng value để duyệt mảng
for(let job of jobs){
    console.log((job,jobs.indexOf(job)));
}

// forEach:sử dụng cả 2 để duyệt mảng
jobs.forEach(function(value,index){
    console.log(value,index);
})