// Functionality to add a new question
document.getElementById("add-question").addEventListener("click", () => {
  const container = document.getElementById("questions-container");
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";
  questionDiv.innerHTML = `
      <label>Question:</label>
      <input type="text" required>
      <label>Response Type:</label>
      <select>
          <option value="multiple-choice">Multiple Choice</option>
          <option value="rating-scale">Rating Scale</option>
          <option value="open-ended">Open-ended</option>
      </select>
  `;
  container.appendChild(questionDiv);
});

// Sample data for active surveys
const surveys = [
  { title: "Customer Satisfaction Survey" },
  { title: "Employee Feedback Survey" }
];


// Load surveys into the table
function loadSurveys() {
  const tbody = document.getElementById("surveys-table").querySelector("tbody");
  tbody.innerHTML = ""; // Clear existing rows
  surveys.forEach(survey => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${survey.title}</td>
          <td>
              <button onclick="editSurvey('${survey.title}')">Edit</button>
              <button onclick="deleteSurvey('${survey.title}')">Delete</button>
          </td>
      `;
      tbody.appendChild(row);
  });
}

// Call loadSurveys to display surveys on page load
loadSurveys();

// Placeholder functions for edit and delete actions
function editSurvey(title) {
  alert(`Editing survey: ${title}`);
}

function deleteSurvey(title) {
  alert(`Deleting survey: ${title}`);
  // Implement delete logic here
}
