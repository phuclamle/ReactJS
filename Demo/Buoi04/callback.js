// callback sử dụng để xử lý các tác vụ bất đồng bộ
// callback:
// 1. callback phải là 1 function
// 2.callback phải được truyền vào 1 hàm khác qua agrument
// 3. callback phải được thực thi

function callback(n1,n2){
    console.log(n1 + n2);
}

function useCallback(params){
    params(10,20);
}

useCallback(callback)