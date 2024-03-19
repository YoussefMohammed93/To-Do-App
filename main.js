document.addEventListener("DOMContentLoaded", function () {
    // Function to Add A New task.
    function addMyElement() {
        let myInput = document.getElementById("typeInput").value.trim();
        // Check If My Input Value Not Empty.
        if (myInput !== "") {
            // Create A New div for task item.
            let taskItem = document.createElement("div");
            taskItem.classList.add("task-item");
            // Create An Icon For Delete.
            let deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fas", "fa-trash-alt");
            deleteIcon.addEventListener("click", function () {
                // Call Confirmation Popup Before Deletion.
                showConfirmation(taskItem);
            });
            // Create A True Icon And Toggle It When Clicked.
            let trueIcon = document.createElement("i");
            trueIcon.classList.add("fa-solid", "fa-circle-check", "unchecked");
            trueIcon.addEventListener("click", function () {
                // Toggle Between Checked And Unchecked.
                if (this.classList.contains("unchecked")) {
                    this.classList.remove("unchecked");
                    this.classList.add("checked");
                    // Show Success Message When Task Is Completed.
                    showSuccessMessage();
                } else {
                    this.classList.remove("checked");
                    this.classList.add("unchecked");
                };
            });
            // Create A Span Element And Put Input Text In It.
            let mySpan = document.createElement("span");
            mySpan.textContent = myInput;
            // Append Icons And Span To Task Item.
            let iconsDiv = document.createElement("div");
            iconsDiv.classList.add("icons");
            iconsDiv.appendChild(trueIcon);
            iconsDiv.appendChild(deleteIcon);
            taskItem.appendChild(mySpan);
            taskItem.appendChild(iconsDiv);
            // Append The New Task Item To the Task List.
            let taskList = document.querySelector(".task-list");
            taskList.appendChild(taskItem);
            // Clear My Input Field After Adding The Task.
            document.getElementById("typeInput").value = "";
            // Show The Tasks List.
            taskList.parentElement.classList.remove("hide");
            // Hide The Title.
            document.querySelector(".title h2").classList.add("hide");
        } else {
            // Show Popup If Input Is Empty.
            document.getElementById("myPopup").classList.remove("hide");
            closePopupBtn = document.getElementById("myPopupBtn").addEventListener("click", () => {
                document.getElementById("myPopup").classList.add("hide");
            });
        };
    };

// Function To Show Confirmation Popup Before Deletion.
function showConfirmation(taskItem) {
    document.getElementById("confirmationPopup").classList.remove("hide");
    document.getElementById("confirmDeleteBtn").addEventListener("click", function () {
        // Remove Task Item On Click.
        taskItem.remove();
        // Show The Title If There Are No Tasks Left.
        if (document.querySelectorAll(".task-list .task-item").length === 0) {
            document.querySelector(".title h2").classList.remove("hide");
        };
        // Hide Confirmation Popup After Deletion.
        document.getElementById("confirmationPopup").classList.add("hide");
    });
        document.getElementById("cancelDeleteBtn").addEventListener("click", function () {
            // Hide Confirmation Popup If Deletion Is Canceled.
            document.getElementById("confirmationPopup").classList.add("hide");
        });
    };

// Function To Show Success Message.
function showSuccessMessage() {
    let successPopup = document.createElement("div");
    successPopup.classList.add("success-popup");
    let successText = document.createElement("div");
    successText.textContent = "Your Task Was Completed Successfully";
    successPopup.appendChild(successText);
    document.body.appendChild(successPopup);
    
    // Remove The Success Message After 2 Seconds With SetTimeout.
    setTimeout(function () {
        successPopup.remove();
    }, 2000);
};

// Add Task When The Add Task Button Is Clicked.
document.getElementById("addBtn").addEventListener("click", addMyElement);

// When Page Loaded Make My Input Focused.
document.getElementById("typeInput").focus();
});