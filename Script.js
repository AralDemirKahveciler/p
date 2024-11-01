document.getElementById("output").innerText = "Data added with JavaScript";

const data = [
    {
        Country: "United States (California)",
        Name: "Jessica",
        Surname: "Rodrigues",
        Username: "TechWhiz",
        Email: "mrsRodrigues@gmail.com",
        PhoneNumber: "+12812500247"
    },
    {
        Country: "United Kingdom",
        Name: "Grace",
        Surname: "Evans",
        Username: "CoolCat",
        Email: "graceevans@gmail.com",
        PhoneNumber: "+447598328055"
    },
    {
        Country: "Canada",
        Name: "Everly",
        Surname: "Tremblay",
        Username: "ChillVibes",
        Email: "tremblayeverly@gmail.com",
        PhoneNumber: "+16462608685"
    },
];

// Tablo oluşturma fonksiyonu
function createTable(data) {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = ""; // Eski tabloyu temizle

    const table = document.createElement("table");
    table.border = "1";

    // Başlık satırı ekleme
    const headerRow = document.createElement("tr");
    const headers = ["Country", "Name", "Surname", "Username", "Email", "PhoneNumber"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Veri satırlarını ekleme
    data.forEach(item => {
        const row = document.createElement("tr");
        Object.values(item).forEach(text => {
            const td = document.createElement("td");
            td.innerText = text;
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    // Tabloyu ekrana yerleştirme
    tableContainer.appendChild(table);
}

function toggleTable() {
    const tableContainer = document.getElementById("tableContainer");

    if (tableContainer.style.display === "none" || tableContainer.innerHTML === "") {
        if (tableContainer.innerHTML === "") {
            createTable(data);
        }
        tableContainer.style.display = "block"; // Tabloyu göster
    } else {
        tableContainer.style.display = "none"; // Tabloyu gizle
    }
}

// Veri arama fonksiyonu
function searchData(query) {
    return data.filter(item =>
        Object.values(item).some(value =>
            value.toString().toLowerCase().includes(query.toLowerCase())
        )
    );
}

function performSearch() {
    const query = document.getElementById("searchInput").value;
    const searchResults = searchData(query);
    createTable(searchResults); // Arama sonuçlarını tabloya yerleştir
}
