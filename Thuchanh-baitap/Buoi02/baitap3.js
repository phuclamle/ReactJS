class ThongTin{
    constructor(ten,moTa){
        this.ten = ten;
        this.moTa = moTa;
    }
    static tinhToan(thamSo = 1){
        return thamSo*3;
    }
}

class HinhHoc extends ThongTin{
    constructor(ten,moTa,chieuDai) {
        super(ten,moTa);
        this.chieuDai = chieuDai;
    }
    tinhToan(thamSo = 1){
        return this.chieuDai * thamSo;
    }
}

// Tạo đối tượng của lớp hình hóc
    let hinhHoc = new HinhHoc("Hình vuông","Cạnh hình vuông bằng chieuDai",5);

    // Gọi thuộc tính và phương thức
    console.log(hinhHoc.ten);
    console.log(hinhHoc.moTa);
    console.log(hinhHoc.chieuDai);
    console.log(hinhHoc.tinhToan(8));

    // Gọi phương thức và thuộc tính của lớp cha ThongTin

    console.log(ThongTin.tinhToan(6));