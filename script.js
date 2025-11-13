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
        'Berkah catering': 41500,
        'Aisya catering': 40000,
        'Arsita catering': 29000,
        'DJaya catering': 37500,
        'Sonokembang catering': 60866,
    },

    addOnMenu: {
        'Rawon Daging': 36500,
        'Tahu Campur Lamongan': 19000,
        'Rujak Cingur': 27500,
        'Lontong Balap': 15000,
        'Soto Lamongan': 25500,
        'Nasi Krawu': 29000,
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
    menuItems: ['Rawon Daging', 'Tahu Campur Lamongan', 'Rujak Cingur', 'Lontong Balap', 'Soto Lamongan', 'Nasi Krawu'],
    
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
    menuOptions: [], 
    bridalWear: 'MUA',
    additionalServices: { documentation: false, entertainment: false, WO: false, dekorasiStandar: false, undanganSouvenir: false },
    costEstimation: { total: 0, details: {} }
};

const totalSteps = 4;
let costChart = null; 
const formatRupiah = (amount) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);

function calculateCost() {
    let total = 0;
    const details = {};
    const totalGuests = currentState.guestsFamily + currentState.guestsFriends;
    const multiplier = adatMultiplier[currentState.eventType] || 1.0;
    
    const cateringCost = totalGuests * (priceList.cateringPerGuest[currentState.cateringPackage] || 0);
    total += cateringCost;
    details['Catering (Total Tamu: ' + totalGuests + ')'] = cateringCost;

    const venueCost = priceList.venue[currentState.venueType] || 0;
    total += venueCost;
    details['Venue'] = venueCost;

    const riasKey = priceList.riasBusana[currentState.bridalWear] ? currentState.bridalWear : 'Kebaya Modern Modifikasi';
    const baseRiasBusanaCost = priceList.riasBusana[riasKey] || 0;
    
    const riasBusanaCost = Math.round(baseRiasBusanaCost * multiplier);
    total += riasBusanaCost;
    details['Rias & Busana (Adat ' + currentState.eventType + ')'] = riasBusanaCost;

    let addOnMenuCost = 0;
    currentState.menuOptions.forEach(menuItem => {
        addOnMenuCost += (priceList.addOnMenu[menuItem] || 0) * totalGuests; 
    });
    if (addOnMenuCost > 0) {
         details['Menu Tambahan Khas Jatim'] = addOnMenuCost;
         total += addOnMenuCost;
    }

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

    let finalMessage = `Untuk menutupi kekurangan/memanfaatkan sisa dana sebesar **${formatRupiah(amountToSave)}**, Anda perlu menabung: `;
    finalMessage += `Dengan tabungan **${formatRupiah(monthlySavings)}** per bulan, Anda akan mencapai target dalam waktu **${timeString}**.`;
    
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
    const cateringOptions = Object.keys(priceList.cateringPerGuest);
    cateringOptions.forEach(pkg => {
        const option = new Option(pkg, pkg);
        cateringSelect.add(option);
    });
    cateringSelect.value = currentState.cateringPackage;
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
    document.getElementById('cateringPackage').addEventListener('change', (e) => { currentState.cateringPackage = e.target.value; calculateCost(); });
    document.getElementById('bridalWear').addEventListener('change', (e) => { currentState.bridalWear = e.target.value; calculateCost(); });
    
    const menuContainer = document.getElementById('menu-options');
    optionsConfig.menuItems.forEach(item => {
        const id = `menu-${item.replace(/\s/g, '-')}`;
        const div = document.createElement('div');
        div.className = 'flex items-center';
        div.innerHTML = `<input type="checkbox" id="${id}" value="${item}" class="h-5 w-5 text-jatim-primary focus:ring-jatim-accent rounded-sm border-jatim-secondary cursor-pointer"><label for="${id}" class="ml-3 text-base text-jatim-text cursor-pointer">${item}</label>`;
        div.querySelector('input').addEventListener('change', (e) => {
            const value = e.target.value;
            if (e.target.checked) { currentState.menuOptions.push(value); } 
            else { currentState.menuOptions = currentState.menuOptions.filter(i => i !== value); }
            calculateCost();
        });
        menuContainer.appendChild(div);
    });

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
