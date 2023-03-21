function showSelectedDay() {
    const dayOfWeekElement = document.getElementById("day-of-week");
    const selectedValue = dayOfWeekElement.value;
    const selectedText = dayOfWeekElement.options[dayOfWeekElement.selectedIndex].text;
    const selectedDayElement = document.getElementById("selected-day");
    selectedDayElement.innerHTML = `${selectedText} ${selectedValue}`;
}