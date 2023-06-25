function bulannya(index) {
    const nama_bulan = ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    return nama_bulan[index];
}

function tanggalsekarng() {
    // Mendapatkan bulan saat ini
    var bulan = new Date().getMonth();
    // Mendapatkan tahun saat ini
    var tahun = new Date().getFullYear();
    // Mendapatkan tanggal terakhir dalam bulan sekarang
    var tanggalTerakhir = new Date(tahun, bulan + 1, 0).getDate();
    // Menampilkan tanggal sekarang 
    var tanggalSekarang = new Date().getDate();
    // Menampilkan semua tanggal dalam bulan sekarang
    var tahunini = document.getElementById('tahun-ini')
    tahunini.innerText = tahun
    var bulanini = document.getElementById('bulan-ini')
    bulanini.innerText = bulannya(bulan)
    for (var tanggal = 1; tanggal <= tanggalTerakhir; tanggal++) {
        var tanggalLengkap = new Date(tahun, bulan, tanggal);
        var tgl_html = document.getElementById('tanggal')
        if (tanggal < tanggalSekarang) {
            console.log(`x ${tanggalLengkap.toDateString()}`);
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-red-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}"></p>
                </div>
            `)
        } 
         else if (tanggal == tanggalSekarang) {
            console.log(`x ${tanggalLengkap.toDateString()}`);
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-green-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}"></p>
                </div>
            `)
         }
         else {
            console.log(tanggalLengkap.toDateString())
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-blue-500 border-4 flex flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}"></p>
                </div>
            `)
        }
    }
}
tanggalsekarng();

function tanggalCari(dataBulan, dataTahun) {
    // tahun dan bulan saat ini 
    var bulanku = new Date().getMonth()
    var tahunku = new Date().getFullYear()
    // Mendapatkan bulan cari
    var bulan = dataBulan - 1
    // Mendapatkan tahun cari
    var tahun = dataTahun
    // Mendapatkan tanggal terakhir dalam bulan sekarang
    var tanggalTerakhir = new Date(tahun, bulan + 1, 0).getDate();
    // Menampilkan tanggal sekarang 
    var tanggalSekarang = new Date().getDate();
    // Menampilkan semua tanggal dalam bulan sekarang
    var tahunini = document.getElementById('tahun-ini')
    tahunini.innerText = tahun
    var bulanini = document.getElementById('bulan-ini')
    bulanini.innerText = bulannya(bulan)
    var tgl_html = document.getElementById('tanggal')
    tgl_html.innerHTML = ''
    for (var tanggal = 1; tanggal <= tanggalTerakhir; tanggal++) {
        var tanggalLengkap = new Date(tahun, bulan, tanggal);
        if (tahun < tahunku) {
            tgl_html.insertAdjacentHTML('beforeend', `
                    <div class="w-1/5 h-32 m-3 border-red-500 border-4 flex-wrap float-left">
                        <p id="tgl-${tanggal}">${tanggal}</p>
                        <p id="reminder${tanggal}"></p>
                    </div>
                `)
        } else if(tahun <= tahunku && bulan < bulanku){
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-red-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}"></p>
                </div>
            `)
        }
        else if (tanggal < tanggalSekarang && bulan <= bulanku && tahun <= tahunku) {
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-red-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}"></p>
                </div>
            `)
        } 
         else if (tanggal == tanggalSekarang && tahun == tahunku && bulan == bulanku) {
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-green-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}"></p>
                </div>
            `)
         }
         else {
            console.log(tanggalLengkap.toDateString())
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-blue-500 border-4 flex flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}"></p>
                </div>
            `)
        }
    }
}

function TanggalCari(){
   var year_find = document.getElementById('year').value;
   var bulan_find = document.getElementById('Month').value;
   if (year_find == '0') {
    alert('MASUKAN TAHUN')
   } else if(bulan_find == 0) {
     alert('MASUKAN BULAN ')
   }
   tanggalCari(bulan_find, year_find)
}