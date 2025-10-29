document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('table-container');
    const colorPicker = document.getElementById('colorPicker');
    const table = document.createElement('table');
    let counter = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement('td');
            cell.textContent = counter++;
            if (cell.textContent === '8') {
                cell.addEventListener('mouseover', () => {
                    cell.style.backgroundColor = getRandomColor();
                });

                cell.addEventListener('click', () => {
                    cell.style.backgroundColor = colorPicker.value;
                });

                cell.addEventListener('dblclick', () => {
                    const cellIndex = cell.cellIndex;
                    const rows = table.rows;
                    for (let i = 0; i < rows.length; i++) {
                        for (let j = cellIndex; j < rows[i].cells.length; j += 2) {
                            rows[i].cells[j].style.backgroundColor = colorPicker.value;
                        }
                    }
                });
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

document.getElementById('lab5-form').addEventListener('submit', function(event) {
// ... existing code for form validation
    event.preventDefault();

    const fields = [
        { id: 'fullname', regex: /^[А-ЯІЇЄҐ][а-яіїєґ']+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/, name: 'ПІБ' },
        { id: 'group', regex: /^[А-ЯІЇЄҐ]{2}-\d{2}$/, name: 'Група' },
        { id: 'idcard', regex: /^[А-ЯІЇЄҐ]{2} №\d{6}$/, name: 'ID-card' },
        { id: 'birthdate', regex: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/, name: 'Дата народження' },
        { id: 'email', regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, name: 'Email' }
    ];

    let allValid = true;
    const outputContainer = document.getElementById('output-container');
    outputContainer.innerHTML = '<h3>Введена інформація:</h3>'; 

    fields.forEach(fieldInfo => {
        const input = document.getElementById(fieldInfo.id);
        const value = input.value;
        const isValid = fieldInfo.regex.test(value);

        if (!isValid) {
            input.classList.add('invalid');
            allValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    if (allValid) {
        fields.forEach(fieldInfo => {
            const input = document.getElementById(fieldInfo.id);
            const p = document.createElement('p');
            p.innerHTML = `<strong>${fieldInfo.name}:</strong> ${input.value}`;
            outputContainer.appendChild(p);
        });
        outputContainer.style.display = 'block';
    } else {
        outputContainer.style.display = 'none';
    }
});