const priceList = {
    venue: {
        'Ballroom Eighty Nine': 19000000,
        'BG Junction Multifunction Hall': 5000000,
        'BG Junction Ballroom': 27000000,
        'Empire Palace': 140000000,
        'Convention Hall': 15000000,
        'Astoria Convention Hall': 74000000,
        'Gedung Graha Bina Sehat PPNI': 65000000,
        'Aston Mojokerto Hotel & Conference Center': 25000000,
        'Ayola Sunrise Mojokerto': 13000000,
        'Lynn Hotel': 10000000,
        'Grand Surya Kediri': 12500000,
        'Bagawanta Bhari': 1250000,
        'Convention Hall SLG': 29000000,
        'Viva Hotel Kediri': 23500000,
        'De Pratnya Hotel': 10500000,
        'White Romance Palace': 17500000,
        'Grha Lestari Tulungagung': 30000000,
        'Crown Victoria Hotel': 29000000,
        'Barn Meeting and Convention': 5000000,
        'Sultan Guest House n Resto': 9500000,
        'Graha Patria Blitar': 87500000,
        'Gira Putri Hotel Blitar': 3500000,
    },
    
    cateringPerGuest: {
        'Berkah - Nasi Liwet Box': {
            price: 40000,
            menu: "Paket Nasi Liwet/Box (Rp 40.000):\n- Nasi Liwet Gurih\n- Ayam Goreng/Bakar\n- Ikan Asin/Teri\n- Tahu/Tempe Goreng\n- Lalapan, Sambal"
        },
        'Aisya - Box Ekonomis': {
            price: 25000,
            menu: "Paket Nasi Box Ekonomis (Rp 25.000):\n- Nasi Putih\n- Ayam Goreng Laos\n- Tumis Buncis Wortel\n- Telur Bacem Utuh/Iris\n- Sambal, Kerupuk"
        },
        'Aisya - Box Standar': {
            price: 35000,
            menu: "Paket Nasi Box Standar (Rp 35.000):\n- Nasi Putih\n- Ayam Bakar Kampung/Ayam Bumbu\n- Sambal Goreng Krecek/Kentang\n- Oseng Sosis/Tumisan\n- Urap/Lalapan, Kerupuk, Jeruk/Buah"
        },
        'Aisya - Box Premium': {
            price: 45000,
            menu: "Paket Box Premium (Rp 45.000):\n- Nasi Putih\n- Daging Lada Hitam/Rendang\n- Jamur Crispy/Tahu Crispy\n- Tumis Janten Sosis/Tumis Sayuran Mewah\n- Sambal, Kerupuk"
        },
        'Arsita - Box Praktis': {
            price: 28000,
            menu: "Nasi Box Praktis (Rp 28.000):\n- Nasi Putih\n- Ayam Goreng/Bumbu\n- Tumis Sayuran Sederhana\n- Lauk Pendamping (Tahu/Tempe)\n- Kerupuk, Air Mineral"
        },
        'Arsita - Box Lengkap': {
            price: 50000,
            menu: "Nasi Box Lengkap (Rp 50.000):\n- Nasi Putih\n- Lauk Utama (Ayam Bakar Madu/Ikan Fillet)\n- Sambal Goreng Kentang Ati\n- Sayur Pilihan (Capcay), Telur Balado, Buah Segar"
        },
        'DJaya - Paket Sadewa&Indra': {
            price: 24000,
            menu: "Paket Sadewa & Indra (Rp 24.000):\n- Nasi Putih\n- Ayam Goreng/Saos Inggris (Pilih 1)\n- Bakmie/Bihun\n- Capcay/Tahu Balado\n- Sambal, Kerupuk, Air Mineral"
        },
        'DJaya - Paket Bima': {
            price: 26000,
            menu: "Paket Bima (Rp 26.000):\n- Nasi Putih\n- Olahan Ayam (Bakar/Bumbu Rujak)\n- Olahan Daging (Porsi Kecil)\n- Capcay, Bakmie/Bihun\n- Sambal, Kerupuk, Buah/Air Mineral"
        },
        'Sonokembang - Box Intan Reguler': {
            price: 37000,
            menu: "Nasi Box Intan Reguler (Rp 37.000):\n- Nasi Putih\n- Lauk Daging/Ikan (mis. Pepes Nasi Isi Ayam)\n- Lauk Ayam, Sambal Goreng Hati, Sayur\n- Kerupuk, dan Pelengkap"
        },
        'Sonokembang - Box Delima Reguler': {
            price: 30000,
            menu: "Nasi Box Delima Reguler (Rp 30.000):\n- Nasi Putih\n- Lauk Ayam (mis. Ayam Kalasan)\n- Lauk Pendamping (mis. Telur Bacem)\n- Sayur, Sambal, dan Kerupuk/Pelengkap"
        },
        'Basic': {
            price: 35000, 
            menu: "Paket Standar Dasar (35k/org):\n- 1 Main Course Ayam\n- 1 Soup/Sayur\n- Nasi\n- Air Mineral\n- Buah Potong"
        },
        'Standard': {
            price: 45000,
            menu: "Paket Standar Menengah (45k/org):\n- 2 Main Course (Ayam & Daging)\n- 1 Dessert (Puding)\n- 1 Stall Minuman\n- Nasi, Soup, Buah"
        },
        'Premium': {
            price: 65000,
            menu: "Paket Mewah (65k/org):\n- 3 Main Course\n- 2 Stall (Termasuk Menu Khas Jatim)\n- Dessert Komplit\n- Minuman Jus & Kopi/Teh"
        }
    },
    
    riasBusana: { 
        'MUA': 9375000,
        'Juwita wedding': 7500000,
        'Griya rias pengantin Surabaya': 14500000,
        'Paes ageng jatim': 7500000,
        'Dodotan jawa timuran': 12500000,
        'Kebaya Modern Modifikasi': 20000000 
    },

    additionalServices: {
        documentation: 5000000,
        WO: 52500000,
        undanganSouvenir: 5375000,
        entertainment: 1650000,
        dekorasiStandar: 17500000,
    }
};

const adatMultiplier = {
    'Malangan': 1.0, 'Surabayan': 1.15, 'Suroboyoan': 1.25, 'Modern Jatim': 0.90,
};

const optionsConfig = {
    additionalServices: [
        { id: 'documentation', label: 'Dokumentasi (Foto & Video)' },
        { id: 'WO', label: 'Wedding Organizer' },
        { id: 'undanganSouvenir', label: 'Undangan & Souvenir' },
        { id: 'entertainment', label: 'Hiburan (Musik/Tarian)' },
        { id: 'dekorasiStandar', label: 'Dekorasi Standar' },
    ]
};

let currentState = {
    step: 1,
    budget: 150000000, monthlySavings: 5000000, 
    guestsFamily: 50, guestsFriends: 50, eventType: 'Malangan',
    venueType: 'Ballroom Eighty Nine', 
    cateringPackage: 'Basic', 
    bridalWear: 'MUA',
    additionalServices: { documentation: false, entertainment: false, WO: false, dekorasiStandar: false, undanganSouvenir: false },
    costEstimation: { total: 0, details: {} }
};

const totalSteps = 4;
let costChart = null; 
const formatRupiah = (amount) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);

function getCateringPrice(key) {
    const pkg = priceList.cateringPerGuest[key];
    return pkg ? pkg.price : 0;
}

function getCateringMenu(key) {
    const pkg = priceList.cateringPerGuest[key];
    return pkg ? pkg.menu : "Menu tidak tersedia untuk paket ini.";
}

function calculateCost() {
    let total = 0;
    const details = {};
    const totalGuests = currentState.guestsFamily + currentState.guestsFriends;
    const multiplier = adatMultiplier[currentState.eventType] || 1.0;
    
    const cateringPricePerGuest = getCateringPrice(currentState.cateringPackage);
    const cateringCost = totalGuests * cateringPricePerGuest;
    total += cateringCost;
    details['Catering (Total Tamu: ' + totalGuests + ', Harga/org: ' + formatRupiah(cateringPricePerGuest) + ')'] = cateringCost;

    const venueCost = priceList.venue[currentState.venueType] || 0;
    total += venueCost;
    details['Venue'] = venueCost;

    const riasKey = priceList.riasBusana[currentState.bridalWear] ? currentState.bridalWear : 'Kebaya Modern Modifikasi';
    const baseRiasBusanaCost = priceList.riasBusana[riasKey] || 0;
    
    const riasBusanaCost = Math.round(baseRiasBusanaCost * multiplier);
    total += riasBusanaCost;
    details['Rias & Busana (Adat ' + currentState.eventType + ')'] = riasBusanaCost;

    for (const serviceId in currentState.additionalServices) {
        if (currentState.additionalServices[serviceId]) {
            const serviceCost = priceList.additionalServices[serviceId] || 0;
            total += serviceCost;
            const label = optionsConfig.additionalServices.find(s => s.id === serviceId)?.label || serviceId;
            details[label] = serviceCost;
        }
    }
    
    currentState.costEstimation = { total, details };
    updateResultDisplay();
}

function calculateSavingsPlan() {
    const totalCost = currentState.costEstimation.total;
    const currentBudget = currentState.budget;
    const monthlySavings = currentState.monthlySavings;
    const savingsCard = document.getElementById('savings-plan-card');
    const savingsMessage = document.getElementById('savings-message');

    if (monthlySavings < 1 || totalCost <= 0) {
        savingsCard.classList.add('hidden');
        return;
    }
    
    const amountToSave = Math.abs(currentBudget - totalCost);
    
    if (amountToSave <= 0) {
         savingsCard.classList.add('hidden');
         return;
    }

    savingsCard.classList.remove('hidden');
    
    const months = Math.ceil(amountToSave / monthlySavings);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let timeString = '';
    if (years > 0) {
        timeString += `${years} tahun`;
        if (remainingMonths > 0) timeString += ` dan ${remainingMonths} bulan`;
    } else {
        timeString += `${months} bulan`;
    }

    let finalMessage = `Untuk menutupi kekurangan/memanfaatkan sisa dana sebesar ${formatRupiah(amountToSave)}, Anda perlu menabung: `;
    finalMessage += `Dengan tabungan ${formatRupiah(monthlySavings)} per bulan, Anda akan mencapai target dalam waktu ${timeString}.`;
    
    savingsMessage.innerHTML = finalMessage;
}

function validateStep(step) {
    const errorElement = document.getElementById('error-message');
    errorElement.classList.add('hidden'); 

    if (step === 1) {
        const totalGuests = currentState.guestsFamily + currentState.guestsFriends;
        if (totalGuests < 1 || !currentState.budget || !currentState.monthlySavings) {
            errorElement.textContent = 'Semua field di Langkah 1 harus diisi dengan benar!';
            errorElement.classList.remove('hidden');
            return false;
        }
    }
    return true;
}

function updateStepDisplay() {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach((step, index) => {
        step.classList.toggle('hidden', index + 1 !== currentState.step);
    });

    document.getElementById('prevBtn').classList.toggle('hidden', currentState.step === 1);
    document.getElementById('error-message').classList.add('hidden');
    
    const isResultStep = currentState.step > totalSteps;
    document.getElementById('result-section').classList.toggle('hidden', !isResultStep);
    document.getElementById('nextBtn').classList.toggle('hidden', isResultStep); 

    const nextBtn = document.getElementById('nextBtn');
    if (currentState.step === totalSteps) {
        nextBtn.textContent = 'Lihat Estimasi';
        nextBtn.classList.remove('ml-auto');
    } else if (currentState.step < totalSteps) {
        nextBtn.textContent = 'Selanjutnya \u2192'; 
        nextBtn.classList.add('ml-auto');
    }
    
    if (isResultStep) {
        calculateCost();
    }

    renderProgressBar();
}

function renderProgressBar() {
    const progressContainer = document.getElementById('step-progress');
    progressContainer.innerHTML = '';
    const stepLabels = ["Anggaran & Tabungan", "Venue & Catering", "Rias & Busana", "Layanan Tambahan"];

    stepLabels.forEach((label, index) => {
        const stepNum = index + 1;
        const isActive = currentState.step === stepNum;
        const isCompleted = currentState.step > stepNum;

        const indicator = document.createElement('div');
        indicator.className = 'flex-1 text-center';
        indicator.innerHTML = `
            <div class="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-lg font-bold step-indicator
                ${isActive ? 'bg-jatim-primary text-jatim-background shadow-lg' : isCompleted ? 'bg-jatim-accent text-jatim-primary' : 'bg-jatim-secondary text-white opacity-70'}
            ">
                ${stepNum}
            </div>
            <p class="mt-2 text-sm md:text-base ${isActive ? 'font-semibold text-jatim-primary' : 'text-gray-600'}">
                ${label}
            </p>
        `;
        progressContainer.appendChild(indicator);
    });
}

function updateResultDisplay() {
    const { total, details } = currentState.costEstimation;
    const budget = currentState.budget;

    document.getElementById('user-budget').textContent = formatRupiah(budget);
    document.getElementById('total-cost').textContent = formatRupiah(total);

    const diff = budget - total;
    const budgetStatusElement = document.getElementById('budget-status');
    const budgetDiffElement = document.getElementById('budget-diff');

    budgetStatusElement.className = 'p-3 rounded-md text-white';

    if (budget === 0) { 
        budgetStatusElement.classList.add('bg-danger');
        budgetDiffElement.textContent = `Lebih Rp ${formatRupiah(total)}`;
    } else if (diff >= 0.1 * budget) {
        budgetStatusElement.classList.add('bg-success');
        budgetDiffElement.textContent = `Sisa ${formatRupiah(diff)}`;
    } else if (diff >= 0 && diff < 0.1 * budget) {
        budgetStatusElement.classList.add('bg-warning', 'text-jatim-text');
        budgetDiffElement.textContent = `Sisa ${formatRupiah(diff)}`;
    } else {
        budgetStatusElement.classList.add('bg-danger');
        budgetDiffElement.textContent = `Lebih Rp ${formatRupiah(Math.abs(diff))}`;
    }

    const detailsList = document.getElementById('cost-details');
    detailsList.innerHTML = '';
    for (const [category, amount] of Object.entries(details)) {
        if (amount > 0) {
            const listItem = document.createElement('li');
            listItem.className = 'flex justify-between border-b border-jatim-secondary pb-2';
            listItem.innerHTML = `
                <span class="text-jatim-text">${category}:</span>
                <span class="font-semibold text-jatim-primary">${formatRupiah(amount)}</span>
            `;
            detailsList.appendChild(listItem);
        }
    }
    
    calculateSavingsPlan();
    updatePieChart(details);
}

function updatePieChart(details) {
    const ctx = document.getElementById('costPieChart').getContext('2d');
    const filteredDetails = Object.entries(details).filter(([, amount]) => amount > 0);
    
    const data = {
        labels: filteredDetails.map(([category]) => category),
        datasets: [{
            data: filteredDetails.map(([, amount]) => amount),
            backgroundColor: [
                '#4A2A22', '#A87A5E', '#FFD700', '#8B4513', '#D2B48C', '#CD853F', 
                '#F4A460', '#BDB76B', '#5F9EA0', '#4A2A22', '#A87A5E', '#FFD700',
            ],
            borderColor: '#FDFBF6',
            borderWidth: 2,
        }]
    };
    
    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'bottom', labels: { color: '#2C1D17' } },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (context.parsed !== null) {
                            label += ': ' + formatRupiah(context.parsed);
                        }
                        return label;
                    }
                }
            }
        }
    };

    if (costChart) {
        costChart.data = data;
        costChart.options = options;
        costChart.update();
    } else {
        costChart = new Chart(ctx, { type: 'pie', data: data, options: options });
    }
}

function updateCateringMenuDisplay() {
    const menuDescription = getCateringMenu(currentState.cateringPackage);
    const menuDisplayElement = document.getElementById('catering-menu-display');
    menuDisplayElement.innerHTML = menuDescription.replace(/\n/g, '<br>');
}

function renderVenueAndCateringOptions() {
    const venueSelect = document.getElementById('venueType');
    const cateringSelect = document.getElementById('cateringPackage');
    
    venueSelect.innerHTML = '';
    Object.keys(priceList.venue).forEach(venue => {
        const option = new Option(venue, venue);
        venueSelect.add(option);
    });
    venueSelect.value = currentState.venueType;
    
    cateringSelect.innerHTML = '';
    Object.keys(priceList.cateringPerGuest).forEach(pkg => {
        const option = new Option(pkg, pkg);
        cateringSelect.add(option);
    });
    cateringSelect.value = currentState.cateringPackage;
    
    updateCateringMenuDisplay();
}

function renderRiasBusanaOptions() {
    const bridalWearSelect = document.getElementById('bridalWear');
    bridalWearSelect.innerHTML = '';
    
    Object.keys(priceList.riasBusana).forEach(wear => {
        const option = new Option(wear, wear);
        bridalWearSelect.add(option);
    });
    bridalWearSelect.value = currentState.bridalWear;
}

function attachEventHandlers() {
    document.getElementById('budget').addEventListener('input', (e) => { currentState.budget = parseInt(e.target.value) || 0; calculateCost(); });
    document.getElementById('monthlySavings').addEventListener('input', (e) => { currentState.monthlySavings = parseInt(e.target.value) || 0; calculateCost(); });
    document.getElementById('guestsFamily').addEventListener('input', (e) => { currentState.guestsFamily = parseInt(e.target.value) || 0; calculateCost(); });
    document.getElementById('guestsFriends').addEventListener('input', (e) => { currentState.guestsFriends = parseInt(e.target.value) || 0; calculateCost(); });
    document.getElementById('eventType').addEventListener('change', (e) => { currentState.eventType = e.target.value; calculateCost(); });

    document.getElementById('venueType').addEventListener('change', (e) => { currentState.venueType = e.target.value; calculateCost(); });
    document.getElementById('cateringPackage').addEventListener('change', (e) => { 
        currentState.cateringPackage = e.target.value; 
        updateCateringMenuDisplay();
        calculateCost(); 
    });
    document.getElementById('bridalWear').addEventListener('change', (e) => { currentState.bridalWear = e.target.value; calculateCost(); });
    
    const servicesContainer = document.getElementById('additional-services-options');
    optionsConfig.additionalServices.forEach(service => {
        const id = `service-${service.id}`;
        const div = document.createElement('div');
        div.className = 'flex items-center';
        div.innerHTML = `<input type="checkbox" id="${id}" value="${service.id}" class="h-5 w-5 text-jatim-primary focus:ring-jatim-accent rounded-sm border-jatim-secondary cursor-pointer"><label for="${id}" class="ml-3 text-base text-jatim-text cursor-pointer">${service.label}</label>`;
        div.querySelector('input').addEventListener('change', (e) => {
            currentState.additionalServices[e.target.value] = e.target.checked;
            calculateCost();
        });
        servicesContainer.appendChild(div);
    });
}

function nextStep() {
    if (validateStep(currentState.step) && currentState.step <= totalSteps) {
        currentState.step++;
        updateStepDisplay();
        if (currentState.step === 2) renderVenueAndCateringOptions();
        if (currentState.step === 3) renderRiasBusanaOptions();
    } 
}

function prevStep() {
    if (currentState.step > 1) {
        currentState.step--;
        updateStepDisplay();
    }
}

function printResult() {
    window.print();
}

window.nextStep = nextStep;
window.prevStep = prevStep;
window.printResult = printResult;

function initialize() {
    renderVenueAndCateringOptions();
    renderRiasBusanaOptions();
    
    attachEventHandlers();
    
    currentState.budget = parseInt(document.getElementById('budget').value) || 0;
    currentState.monthlySavings = parseInt(document.getElementById('monthlySavings').value) || 0;
    currentState.guestsFamily = parseInt(document.getElementById('guestsFamily').value) || 0;
    currentState.guestsFriends = parseInt(document.getElementById('guestsFriends').value) || 0;
    
    calculateCost(); 
    updateStepDisplay(); 
}

document.addEventListener('DOMContentLoaded', initialize);
