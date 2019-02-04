Vue.filter('uppercase', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.toUpperCase();
})

var appVue = new Vue({
  el: '#appVue',
  data: {
    namaAplikasi: 'P E R H I T U N G A N - C E P A T ',
    // INSTALASI
      instal:false,
      namaWilayah:'',
      // JUMLAH DPT
        jumlahDPT: 1,
    // SUARA
      suaraPaslon1: 0,
      suaraPaslon2: 0,
    // PREPARE ADD SUARA
      prepareAddSuara:0
  },
  computed: {
    totalSuara(){
      return this.suaraPaslon1 + this.suaraPaslon2;
    },
    suaraGolput(){
      return this.jumlahDPT - this.totalSuara;
    }
  },
  methods: {
    saveInstal(){
      this.instal = true;
      localStorage.setItem('namaWilayah', JSON.stringify(this.namaWilayah));
      localStorage.setItem('jumlahDPT',JSON.stringify(this.jumlahDPT));
      localStorage.setItem('instal', JSON.stringify(this.instal));
      $('#modalInstal').modal('hide');
    },
    prepareAddSuaraPaslon(nomerPaslon) {
      this.prepareAddSuara = nomerPaslon;
      $('#modalAddSuara').modal('show');
    },
    addSuaraPaslon(){
      if(this.prepareAddSuara == 1){
        this.suaraPaslon1++;
      }else{
        this.suaraPaslon2++;
      }
      localStorage.setItem('suaraPaslon1', JSON.stringify(this.suaraPaslon1));
      localStorage.setItem('suaraPaslon2', JSON.stringify(this.suaraPaslon2));
      localStorage.setItem('totalSuara', JSON.stringify(this.totalSuara));
      localStorage.setItem('suaraGolput', JSON.stringify(this.suaraGolput));
      $('#modalAddSuara').modal('hide');
    }
  },
  created() {
    this.instal = JSON.parse(localStorage.getItem('instal')) || 0;
    this.namaWilayah = JSON.parse(localStorage.getItem('namaWilayah')) || '';
    this.jumlahDPT = JSON.parse(localStorage.getItem('jumlahDPT')) || 1;
    // 
    this.suaraPaslon1 = JSON.parse(localStorage.getItem('suaraPaslon1')) || 0;
    this.suaraPaslon2 = JSON.parse(localStorage.getItem('suaraPaslon2')) || 0;
    this.totalSuara = JSON.parse(localStorage.getItem('totalSuara')) || 0;
    this.suaraGolput = JSON.parse(localStorage.getItem('suaraGolput'))|| 0;
  }
});

$(() => {
  $('.ui.dropdown').dropdown();
  $('.ui.modal').modal();
  $('.ui.checkbox').checkbox();
  $('.menu .item').tab();

  $('#modalAddSuara').modal({
    duration:100
  });

  $('#modalInstal').modal({
    closable:false
  });
  $('#modalInstal').modal('show');
});