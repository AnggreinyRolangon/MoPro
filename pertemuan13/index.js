// // oop in javascript
// //object literal
// const mobil1 ={
//     merek : "toyota",
//     warna : "hitam",
//     nyalakanmobil: function(){
//         console.log(`mobil dengan merek ${this.merek}sudah dinyalakan`);
//     },
// };

// const mobil2 ={
//     merek : "toyota",
//     warna : "putih",
//     nyalakanmobil: function(){
//         console.log(`mobil dengan merek ${this.merek}sudah dinyalakan`);
//     },
// };

// mobil.nyalakanmobil();
// mobil.nyalakanmobil();

// object class

class Mobil{
    constructor(merek, warna){
        this.merek = merek;
        tjis.warna = warna;
    }
    nyalakanmobil(){
        console.log(`mobil dengan merek ${this.merek}sudah dinyalakan`);
    }
}

const mobil1 = new Mobil("toyota, hitam");
const mobil2 = new Mobil("toyot, putih");
mobil1.nyalakanmobil();
mobil2.nyalakanmobil();