  $(function() {

    // === 1) Emissioni GHG 2015 → 2024 → target 2030 ===
    new Chart($('#ghgTrend'), {
      type: 'line',
      data: {
        labels: ['2015', '2019', '2024', '2030 (target)'],
        datasets: [{
          label: 'Emissioni lorde (Mt CO₂e)',
          data: [38.4, 25.1, 15.3, 9.6],
          borderWidth: 2,
          borderColor: '#f44336',
          tension: 0.3
        },{
          label: 'Emissioni nette (Mt CO₂e)',
          data: [38.4, 25.1, 14.5, 0],
          borderWidth: 2,
          borderColor: '#4CAF50',
          tension: 0.3
        }]
      },
      options: {
        plugins: {
          title: { display: true, text: 'Riduzione progressiva delle emissioni totali di Apple' },
        },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Mt CO₂e' } }
        }
      }
    });


    // === 2) Emissioni evitate nel 2024 ===
    new Chart($('#avoidedEmissions'), {
      type: 'bar',
      data: {
        labels: [
          'Supplier clean energy',
          'Abatement F-GHG',
          'Low-carbon materials',
          'Eff. energetica fornitori',
          'Rinnovabile corporate',
          'Clean energy uso prodotti',
          'Altre'
        ],
        datasets: [{
          label: 'Mt CO₂e evitate (2024)',
          data: [21.8, 8.4, 6.2, 2.0, 1.2, 0.3, 1.1],
          backgroundColor: '#2196F3'
        }]
      },
      options: {
        indexAxis: 'y',
        plugins: {
          title: { display: true, text: 'Totale emissioni evitate nel 2024 (41 Mt CO₂e)' },
          legend: { display: false }
        },
        scales: {
          x: { beginAtZero: true, title: { display: true, text: 'Mt CO₂e' } }
        }
      }
    });


    // === 3) Materiali riciclati ===
    new Chart($('#recycledMaterials'), {
      type: 'bar',
      data: {
        labels: ['Tungsteno','Alluminio','Cobalto','Oro','Litio','Terre rare','Media prodotti'],
        datasets: [{
          label: '% da fonte riciclata (2024)',
          data: [99, 71, 76, 40, 53, 80, 24],
          backgroundColor: '#FF9800'
        }]
      },
      options: {
        plugins: {
          title: { display: true, text: 'Percentuale di materiali riciclati nei prodotti Apple (2024)' },
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, max: 100, title: { display: true, text: '%' } }
        }
      }
    });


    // === 4) Composizione packaging ===
    new Chart($('#packaging'), {
      type: 'bar',
      data: {
        labels: ['Plastica','Fibra riciclata','Fibra vergine responsabile'],
        datasets: [{
          label: '2015',
          data: [21, 31, 39],
          backgroundColor: '#9E9E9E'
        },{
          label: '2024',
          data: [1, 48, 60],
          backgroundColor: '#4CAF50'
        }]
      },
      options: {
        plugins: {
          title: { display: true, text: 'Composizione del packaging (2015 vs 2024)' }
        },
        scales: {
          y: { beginAtZero: true, max: 100, title: { display: true, text: '% del totale' } }
        }
      }
    });


    // === 5) Energia rinnovabile supply chain ===
    new Chart($('#supplierRenewables'), {
      type: 'line',
      data: {
        labels: ['2016','2018','2020','2022','2024'],
        datasets: [{
          label: 'Capacità rinnovabile (GW)',
          data: [1, 4, 8, 12, 17.8],
          borderWidth: 2,
          borderColor: '#03A9F4',
          tension: 0.3
        }]
      },
      options: {
        plugins: {
          title: { display: true, text: 'Crescita della capacità rinnovabile nella supply chain di Apple' },
        },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Gigawatt (GW)' } }
        }
      }
    });

  });