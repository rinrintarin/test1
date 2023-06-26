// Calculate total cost dynamically
function calculateTotalCost() {
  var subjectCheckboxes = document.querySelectorAll('input[name="subjects"]:checked');
  var timeSlot = document.querySelector('select[name="time-slot"]').value;
  
  var totalCost = 0;
  
  // Assign prices to subjects and time slots
  subjectCheckboxes.forEach(function(checkbox) {
    if (checkbox.value === "Math") {
      totalCost += 50; // Assign the price for Math
    } else if (checkbox.value === "Science") {
      totalCost += 60; // Assign the price for Science
    }
    // Add more conditions for other subjects and prices
  });
  
  // Update total cost on the page
  document.getElementById('total-cost').textContent = '$' + totalCost;
}

// Listen for form submission
document.getElementById('tutoring-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Perform necessary actions, such as storing the information or generating a confirmation
  
  // Reset the form
  this.reset();
  
  // Update total cost to $0
  document.getElementById('total-cost').textContent = '$0';
});

// Listen for changes in subject checkboxes and time slot selection
var subjectCheckboxes = document.querySelectorAll('input[name="subjects"]');
subjectCheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', calculateTotalCost);
});

var timeSlotSelect = document.querySelector('select[name="time-slot"]');
timeSlotSelect.addEventListener('change', calculateTotalCost);
