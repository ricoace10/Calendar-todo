function addEvent(selectedDay, selectedMonth, selectedYear, eventText) {
  const year = currentYear;
  const month = currentMonth;

  // Load existing events from localStorage (assuming you have this functionality)
  loadEvent();

  const newEvent = {
    date: `${selectedYear}-${selectedMonth + 1}-${selectedDay}`, // Using selected date here
    text: eventText, // Using eventText entered by the user
  };

  // Add the new event to the events array
  todos.push(newEvent);

  // Save updated events to localStorage (assuming you have this functionality)
  saveEvent();

  updateTodoCountForDays();

  // Update event list to reflect the added event for the selected day
  showEventsForSelectedDay(selectedYear, selectedMonth, selectedDay);
}

// Function to delete an event
function deleteEvent(selectedYear, selectedMonth, selectedDay, eventText) {
  const selectedDate = `${selectedYear}-${selectedMonth + 1}-${selectedDay}`;
  todos = todos.filter(
    (event) => !(event.date === selectedDate && event.text === eventText)
  );
  saveEvent();
  showEventsForSelectedDay(selectedYear, selectedMonth, selectedDay);
  updateTodoCountForDays();
}

// Function to handle the delete event click
function handleDeleteClick(
  selectedYear,
  selectedMonth,
  selectedDay,
  eventText
) {
  return function () {
    deleteEvent(selectedYear, selectedMonth, selectedDay, eventText);
  };
}

// Update the showEventsForSelectedDay function to include edit buttons and functionality
function showEventsForSelectedDay(selectedYear, selectedMonth, selectedDay) {
  const selectedDate = `${selectedYear}-${selectedMonth + 1}-${selectedDay}`;
  const eventsForSelectedDay = todos.filter(
    (event) => event.date === selectedDate
  );

  elements.eventsList.innerHTML = ""; // Clear previous event list

  eventsForSelectedDay.forEach((event) => {
    const eventItem = document.createElement("li");

    // Append date and event text together
    const eventContent = `${event.date}: ${event.text}`;
    eventItem.textContent = eventContent;

    const deleteButton = document.createElement("i");
    deleteButton.setAttribute("data-cy", "delete-todo-button");
    deleteButton.classList.add(
      "fa-solid",
      "fa-xmark",
      "cursor-pointer",
      "delete-event"
    );

    const editButton = document.createElement("i");
    editButton.setAttribute("data-cy", "edit-todo-button");
    editButton.classList.add(
      "fa-solid",
      "fa-pencil",
      "cursor-pointer",
      "edit-event"
    );

    deleteButton.addEventListener(
      "click",
      handleDeleteClick(selectedYear, selectedMonth, selectedDay, event.text)
    );

    editButton.addEventListener("click", () => {
      const editEvent = () => {
        // Clear previous content
        elements.addEventField.value = event.text;
        elements.addEventButton.setAttribute("data-cy", " ");
        elements.datePicker.setAttribute("data-cy", " ");
        elements.addEventField.setAttribute("data-cy", " ");

        // nya edit inputs
        const editEventInput = document.createElement("input");
        editEventInput.value = event.text;
        editEventInput.setAttribute("data-cy", "todo-title-input");

        const editDateInput = document.createElement("input");
        editDateInput.value = event.date;
        editDateInput.setAttribute("type", "date");
        editDateInput.setAttribute("data-cy", "todo-date-input");

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.setAttribute("data-cy", "save-todo-button");

        eventItem.textContent = "";
        eventItem.appendChild(editEventInput);
        eventItem.appendChild(editDateInput);
        eventItem.appendChild(saveButton);

        saveButton.addEventListener("click", () => {
          const newEventText = editEventInput.value;
          const newEventDate = editDateInput.value;

          event.text = newEventText;
          event.date = newEventDate;

          const updatedContent = `${event.date}: ${event.text}`;
          eventItem.textContent = updatedContent;
          eventItem.appendChild(editButton);
          eventItem.appendChild(deleteButton);

          todos = todos.map((todo) => {
            if (todo.date === event.date && todo.text === event.text) {
              return event; // Update the existing event with edited content
            }
            return todo;
          });

          saveEvent(); // Save the updated events to localStorage
          updateTodoCountForDays(); // Update the todo count for the days
        });
      };

      editEvent();
    });

    eventItem.appendChild(editButton);
    eventItem.appendChild(deleteButton);
    elements.eventsList.appendChild(eventItem);
  });
}

function updateTodoCountForDays() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear(); // Get the current year
  const currentMonth = currentDate.getMonth(); // Get the current month

  const storedEvents = JSON.parse(localStorage.getItem("todos")) || [];

  const dayElements = elements.daysElement.querySelectorAll("li");
  dayElements.forEach((dayElement) => {
    const day = parseInt(dayElement.firstChild.textContent);

    if (!dayElement.classList.contains("inactive")) {
      const todos = storedEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() === currentYear &&
          eventDate.getMonth() === currentMonth &&
          eventDate.getDate() === day
        );
      });

      const todoCountSpan = dayElement.querySelector(".todo-count");
      if (todos.length > 0) {
        if (todoCountSpan) {
          todoCountSpan.textContent = todos.length;
        } else {
          const todoCountSpan = document.createElement("span");
          todoCountSpan.classList.add("todo-count");
          todoCountSpan.textContent = todos.length;
          todoCountSpan.setAttribute("data-cy", "calendar-cell-todos");
          dayElement.appendChild(todoCountSpan);
        }
      } else if (todoCountSpan) {
        todoCountSpan.remove();
      }
    }
  });
}

window.addEventListener("load", () => {
  loadEvent();
  showEventsForSelectedDay();
  updateTodoCountForDays();
});
