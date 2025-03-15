const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
}

let formData = {};

const fillFormFields = feedbackForm => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formDataFromLS === null){
        return;
    }

    formData = formDataFromLS;

    const formDataKeys = Object.keys(formDataFromLS);

    formDataKeys.forEach(key => {
        feedbackForm.elements[key].value = formDataFromLS[key];
    });

    console.log(formDataKeys);
};

fillFormFields(refs.feedbackForm);

const onFormFieldChange = ({target: formField}) => {
    const fieldName = formField.name;
    const fieldValue = formField.value;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();

    if (event.target.elements.email.value === "" || event.target.elements.message.value  === ""){
        alert(`Fill please all fields`);
        return;
    }
    
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
};

refs.feedbackForm.addEventListener('input', onFormFieldChange);
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);