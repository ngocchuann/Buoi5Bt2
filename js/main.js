// Bai tap 1:
const Den_60 = 0.05;
const Den_60den_120 = 0.1;
const den_120den_210 = 0.15;
const den_210den_384 = 0.2;
const den_384den_624 = 0.25;
const den_624den_960 = 0.3;
const tren960 = 0.35;

function tienThue() {
    var name = document.getElementById("name").value;
    var tongThuNhap = Number(document.getElementById("tong").value);
    var soNguoi = Number(document.getElementById("songuoi").value);

    var thuePhaiTra = tongThuNhap - 4e+6 - 16e+5 * soNguoi;
    var thue;
    if (thuePhaiTra > 0 && thuePhaiTra <= 6e7) {
        console.log("Giá 60 Triệu")
        thue = Den_60 * thuePhaiTra;
    } else if (thuePhaiTra > 6e7 && thuePhaiTra <= 12e7) {
        console.log("Giá 60 Đến 120")
        thue = Den_60den_120 * thuePhaiTra;
    } else if (thuePhaiTra > 12e7 && thuePhaiTra <= 21e7) {
        console.log("Giá 120 Đến 210")
        thue = den_120den_210 * thuePhaiTra;
    } else if (thuePhaiTra < 21e7 && thuePhaiTra <= 384e6) {
        console.log("Giá 210 Đến 384")
        thue = den_210den_384 * thuePhaiTra;
    } else if (thuePhaiTra < 384e6 && thuePhaiTra <= 624e6) {
        console.log("Giá 384 Đến 624")
        thue = den_384den_624 * thuePhaiTra;
    } else if (624e6 < thuePhaiTra && thuePhaiTra <= 960e6) {
        console.log("Giá 624 Đến 960")
        thue = den_624den_960 * thuePhaiTra;
    }
    else if (thuePhaiTra > 960e6) {
        console.log("Giá Thuế Còn lại")
        thue = tren960 * thuePhaiTra;
    } else {
        alert("Số tiền thu nhập không hợp lệ")
    }
    document.getElementById("txtResultinh").innerHTML = "Họ Tên : ," + name + " tiền thuế thu nhập cá nhân : " + thue.toLocaleString() + " VND ";
}
document.getElementById("btntinh").onclick = tienThue;

// Bai tap 2:

function formloaiKhach() {
    var loaikhach = document.getElementById('khachhang').value;
    var soketnoi = document.getElementById('nhapketnoi');

    if (loaikhach == "doanhnghiep") {
        soketnoi.style.display = "block";
    } else {
        soketnoi.style.display = "none";
    }
}

function tienCap() {
    var loaiKhach = document.getElementById('khachhang').value;
    var maKhach = document.getElementById('idkh').value;
    var soKenh = Number(document.getElementById('idsk').value);
    var ketNoi = Number(document.getElementById('ketnoi').value);
    var phi = 0;

    if (loaiKhach == 'hodan') {
        (phi = 4.5 + 20.5 + 7.5 * soKenh);
    } else if (loaiKhach == 'doanhnghiep') {
        if (ketNoi <= 10) {
            phi = 15 + 75 + (50 * soKenh);
        } else {
            phi = 15 + 75 + (50 * soKenh) + (ketNoi - 10) * 5;
        }

    } else {
        alert("Hãy chọn loại khách hàng")
    } 

    document.getElementById("txtResultien").innerHTML = "Mã khách hàng :" + maKhach + ", tiền cáp :" + phi.toLocaleString() + " $";
}
document.getElementById("btntien").onclick = tienCap;