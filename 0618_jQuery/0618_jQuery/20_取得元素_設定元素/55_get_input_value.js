// // 10. 如果是這樣寫的話，有錯誤訊息，為什麼？
// btnGet.onclick = function () {
//     console.log("OK");
// }





// 11. 畫面準備好以後才開始執行
$(document).ready(function () {
    btnGet.onclick = function () {
        // 20. 取得 姓名欄位 (使用 JavaScript 的方式)
        // 21. 取得 姓名欄位 (使用 jQuery 的方式)
        let x = document.getElementById('userName').value ; // 對於input來說，他沒有innerTEXT的概念，因為他沒有結束標籤，所以他得要用value
        let y = $('#userName').prop('value');
        let z = $('#userName').val();
        // 如果要抓取的元素是有value屬性的，那就可以使用val
        console.log(x);
        console.log(y);
        console.log(z);

        // 30. 取得 地址欄位 (使用 JavaScript 的方式)
        // 31. 取得 地址欄位 (使用 jQuery 的方式)
        let q = document.getElementById('address').value;
        let w = $('#address').val();
        console.log(q);
        console.log(w);

        // 40. 取得 年紀欄位 (使用 JavaScript 的方式)
        // 41. 取得 年紀欄位 (使用 jQuery 的方式)
        let r = document.getElementById('age').value;

        console.log(r);
    }
});

