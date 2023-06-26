function bulannya(index) {
    const nama_bulan = ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    return nama_bulan[index];
}

function jamReminder(tahun,bulan,tanggal) {
    waktubulan = document.getElementById('bulan-alarm').value - 1
    waktutahun = document.getElementById('tahun-alarm').value
    waktutanggal = document.getElementById('tanggal-alarm').value
    if (tahun == waktutahun && bulan == waktubulan & tanggal == waktutanggal) {
        return document.getElementById('time_watch').value
    } else {
        return ''
    }
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
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-red-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}"></p>
                </div>
            `)
        } 
         else if (tanggal == tanggalSekarang) {
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-green-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}"></p>
                </div>
            `)
         }
         else {
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

//tanggal yang akan di cari
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
                        <p id="reminder${tanggal}">${jamReminder(tahun,bulan,tanggal)}</p>
                    </div>
                `)
        } else if(tahun <= tahunku && bulan < bulanku){
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-red-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}">${jamReminder(tahun,bulan,tanggal)}</p>
                </div>
            `)
        }
        else if (tanggal < tanggalSekarang && bulan <= bulanku && tahun <= tahunku) {
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-red-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}">${jamReminder(tahun,bulan,tanggal)}</p>
                </div>
            `)
        } 
         else if (tanggal == tanggalSekarang && tahun == tahunku && bulan == bulanku) {
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-green-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}">${jamReminder(tahun,bulan,tanggal)}</p>
                </div>
            `)
         }
         else {
            tgl_html.insertAdjacentHTML('beforeend', `
                <div class="w-1/5 h-32 m-3 border-blue-500 border-4 flex-wrap float-left">
                    <p id="tgl-${tanggal}">${tanggal}</p>
                    <p id="reminder${tanggal}">${jamReminder(tahun,bulan,tanggal)}</p>
                </div>
            `)
        }
    }
}

function tanggalbuatwaktu(dataBulan, dataTahun) {
    // Mendapatkan bulan cari
    var bulan = dataBulan - 1
    // Mendapatkan tahun cari
    var tahun = dataTahun
    // Mendapatkan tanggal terakhir dalam bulan sekarang
    var tanggalTerakhir = new Date(tahun, bulan + 1, 0).getDate();
    // Menampilkan tanggal sekarang 
    var tanggalSekarang = new Date().getDate();
    // Menampilkan semua tanggal dalam bulan sekarang
    var tgl_html = document.getElementById('tanggal-alarm')
    tgl_html.innerHTML = ''
    for (var tanggal = 1; tanggal <= tanggalTerakhir; tanggal++) {
        var tanggalLengkap = new Date(tahun, bulan, tanggal);
        tgl_html.insertAdjacentHTML(`beforeend`,`
            <option value="${tanggal}">${tanggal}</option>
        `)
    }
}

// ketika tombolnhya di tekan
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

// membuat reminder
// close alarm
function closenya() {
    showalarm = document.getElementById('show-alarm')
    showalarm.style = 'display : none'
}
// buat reminder dapat mengsekusinya waktu reminder
function reminder() {
    showalarm = document.getElementById('show-alarm')
    showalarm.style = 'display : block'
}
// mencari waktu
function waktu() {
    showalarm = document.getElementById('timenya')
    showalarm.style = 'display : block'
    waktubulan = document.getElementById('bulan-alarm').value
    waktutahun = document.getElementById('tahun-alarm').value
    document.getElementById('tanggal-alarm').innerHTML = ''
    tanggalbuatwaktu(waktubulan,waktutahun)
}

function buatReminder() {
    showalarm = document.getElementById('show-alarm')
    showalarm.style = 'display : none'
    waktubulan = document.getElementById('bulan-alarm').value
    waktutahun = document.getElementById('tahun-alarm').value
    tanggalCari(waktubulan,waktutahun)
}