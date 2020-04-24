// // Cach khai bao voi tu khoa var
// var t = 'cybersoft';
// //t = 'cybersoft';
// //window.t = 'cybersoft';



// let title = 'cybersoft';
// {
//     title ='cybersoft i';
//     console.log('scope',title);
// }

// const hocVien = {ma:1,ten:'nguyen van a'};
// hocVien.ma =2;
// hocVien.ten ='nguyen van b';
// console.log(hocVien)

// // const tieuDe = 'cybersoft';

// //Khác biệt var let const
// // var hoạt động trên toàn scope
// // let hoạt động trong từng scope
// // const  giá trị không bị gán lại ( Dùng trong các biến config hệ thông như domain, tên token,... hoặc function)
// //------------------Arrowfunction------
// //ES5: function đại diện cho hàm, phương thức, lớp đối tượng
// var showMessage = function (mess){
//     alert(mess);
// }

//ES6
var showMessageArr = (mess) => { alert(mess) };

//ES5
const test = function () {
    return 'ok';
}

//ES6
const testArr = () => 'ok';

const apiThemHocVien = 'https://vn.com/api/themhocvien';
const apiXoaHocVien = 'https://vn.com/api/xoahocvien';

const getApi = urlName => 'https://vn.com/api/' + urlName
getApi('themHocVien');
//Ngu canh con tro this
let hocVien = {
    hoTen: 'NguyenVanA',
    lop: 'FE39',
    layThongTinHocVien: function () {
        var hienThiThongTin = () => {
            console.log('hoTen: ' + this.hoTen)
            console.log('lop: ' + this.lop)
        }
        hienThiThongTin();

    }
}
hocVien.layThongTinHocVien();

//restParam

// function tinhTong(a, b) {
//     console.log(a + b);
//     console.log(a, b);
//     return a + b;
// }
// var tinhTong = function (...restParam) {
//     switch (restparam.lenght) {
//         case 2: {

//         }

//             break;
//         case 3: {

//         }

//             break;
//         default: {

//         }
//             break;
//     }
// }
// tinhTong(1, 2);

var aa = 5;
var bb = aa;
bb =10 ;
console.log('aa',aa);
console.log('bb',bb);

var sinhVienA = {ma:1,ten:'nguyenvana'};
var sinhVienB = {...sinhVienA,lop:'FE39'};
sinhVienB.ten = 'tranthib';

console.log('svA',sinhVienA.ten);
console.log('svB',sinhVienB.ten);
console.log('svB',sinhVienB.lop);