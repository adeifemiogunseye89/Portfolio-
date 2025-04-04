

        let currentDate = new Date();

        function populateYearOptions() {
            const yearSelect = document.getElementById("yearSelect");
            const currentYear = new Date().getFullYear();
            for (let i = 1960; i <= currentYear; i++) {
                let option = document.createElement("option");
                option.value = i;
                option.textContent = i;
                if (i === currentYear) option.selected = true;
                yearSelect.appendChild(option);
            }
        }

        function renderCalendar() {
            const monthYear = document.getElementById("monthYear");
            const calendarDays = document.getElementById("calendarDays");
            const yearSelect = document.getElementById("yearSelect");
            calendarDays.innerHTML = "";

            const month = currentDate.getMonth();
            const year = parseInt(yearSelect.value);
            monthYear.textContent = new Date(year, month).toLocaleString('default', { month: 'long' });

            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();

            for (let i = 0; i < firstDay; i++) {
                calendarDays.innerHTML += `<div></div>`;
            }

            for (let day = 1; day <= lastDate; day++) {
                calendarDays.innerHTML += `<div class="day">${day}</div>`;
            }
        }

        function prevMonth() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        }

        function nextMonth() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        }

        function changeYear() {
            currentDate.setFullYear(parseInt(document.getElementById("yearSelect").value));
            renderCalendar();
        }

        populateYearOptions();
        renderCalendar();