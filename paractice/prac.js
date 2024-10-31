newSurvey.addEventListener('click', function() {
    const mainContainer = document.querySelector('.recentOrders');
    const titleForm = document.createElement('form');
    titleForm.className = 'survey-title';
    titleForm.setAttribute('action', "/submit-form");
    titleForm.setAttribute('method', "post");
  
    // Form fields for Title, Created Date, End Date, and Description
    titleForm.innerHTML = `
        <label for="input-title" id="label-one">Title :</label>
        <input type="text" name="title" id="input-title" placeholder="Title" required>
        <label for="created-date" class="label">Created Date :</label>
        <input type="date" name="created_date" id="created-date" required>
        <label for="deadline" class="label">End Date :</label>
        <input type="date" name="deadline" id="dead-line" required> <br>
        <label for="description-title" id="label-four">Description :</label>
        <input type="text" name="description" id="description" placeholder="Description" required> <br>
    `;
  
    mainContainer.appendChild(titleForm);
  
    // Add Question button container
    const addQuestionBtnContainer = document.createElement('div');
    addQuestionBtnContainer.className = 'addQuestion';
    addQuestionBtnContainer.innerHTML = `<button type="button" class="addQuestionBtn"> Add Question </button>`;
    titleForm.appendChild(addQuestionBtnContainer);
  
    // Container for all questions
    const questionsContainer = document.createElement('div');
    questionsContainer.className = 'questionsContainer';
    titleForm.appendChild(questionsContainer);
  
    // Event listener for adding new questions
    const addQuestionBtn = addQuestionBtnContainer.querySelector('.addQuestionBtn');
    addQuestionBtn.addEventListener('click', function() {
        const questionDiv = document.createElement('form');
        questionDiv.setAttribute('action', "/submit-form");
        questionDiv.setAttribute('method', "post");
        questionDiv.className = 'question';
        
        questionDiv.innerHTML = `
            <label class="questionlbl">Question:</label> <br>
            <input type="text" name="questions[]" placeholder="Add Question" class="questionTbox" required> <br> <br>
            <label class="responselbl">Response Type:</label> <br> <br>
            <select name="response_types[]" class="question-type" required>
                <option value=""></option>
                <option value="multiple-choice">Multiple Choice</option>
                <option value="rating-scale">Rating Scale</option>
                <option value="open-ended">Open-ended</option>
                <option value="description">Description</option>
                <option value="single-choice">Single Choice</option>
            </select>
        `;
  
        questionsContainer.appendChild(questionDiv);
  
        const selectElement = questionDiv.querySelector('.question-type');
        selectElement.addEventListener('change', function() {
          // multiple chice
            if (selectElement.value === "multiple-choice") {
                const responseDiv = document.createElement('div');
                responseDiv.className = 'responseDiv';
                responseDiv.innerHTML = `
                    <input type="checkbox" name="response_options[][opt1]" class="checkboxes checkboxes-one">
                    <input type="text" name="options[]" placeholder="Option one"> <br>
                    <input type="checkbox" name="response_options[][opt2]" class="checkboxes checkboxes-two">
                    <input type="text" name="options[]" placeholder="Option two"> <br>
                    <input type="checkbox" name="response_options[][opt3]" class="checkboxes checkboxes-three">
                    <input type="text" name="options[]" placeholder="Option three"> <br>
                    <input type="checkbox" name="response_options[][opt4]" class="checkboxes checkboxes-four">
                    <input type="text" name="options[]" placeholder="Option four"> <br>
                `;
                questionDiv.appendChild(responseDiv);
            }
            else if (selectElement.value === "single-choice") {
              const responseDiv = document.createElement('div');
              responseDiv.className = 'responseDiv';
              responseDiv.innerHTML = `
                  <input type="radio" name="response_options[single]" value="opt1" class="radio radio-one">
                  <input type="text" name="options[]" placeholder="Option one"> <br>
                  <input type="radio" name="response_options[single]" value="opt2" class="radio radio-two">
                  <input type="text" name="options[]" placeholder="Option two"> <br>
                  <input type="radio" name="response_options[single]" value="opt3" class="radio radio-three">
                  <input type="text" name="options[]" placeholder="Option three"> <br>
              `;
              questionDiv.appendChild(responseDiv);
          }
        });
    });
  
    // Submit button after the questions container
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Save';
    submitButton.className = 'submitButton';
    titleForm.appendChild(submitButton);
  });