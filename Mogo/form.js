const isCheckbox= type=> ['checkbox'].includes(type);

const {form}= document.forms;

function retrieveFormValue(event) {
    event.preventDefault();

    const {elements}= form;
    const values= {};

    for (let i= 0; i<elements.length; i++){
        const formElement= elements[i];
        const{name}= formElement;

        if(name) {
            const {value, type, checked} =formElement;

            values[name] = isCheckbox(type) ? checked : value;
        }
    }
    console.log(values)
}

form.addEventListener('submit', retrieveFormValue);