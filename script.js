<script>
    function addCall() {
        var callInput = document.getElementById("callInput");
        var callText = callInput.value.trim();

        if (callText !== "") {
            var callList = document.getElementById("callList");
            var li = document.createElement("li");
            li.textContent = callText;
            
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Löschen";
            deleteButton.className = "delete";
            deleteButton.onclick = function() {
                li.parentNode.removeChild(li);
            };
            
            li.appendChild(deleteButton);
            callList.appendChild(li);
            
            callInput.value = "";
        }
    }
</script>
