function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";

    document.getElementById("mySidebar").style.left = "0";

    document.getElementById("navbar").style.visibility = "hidden";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";

    document.getElementById("mySidebar").style.left = "-250px";

    document.getElementById("navbar").style.visibility = "visible";
}


// Add an event listener to the button with class ".btn"
document.getElementById("contactButton").addEventListener("click", function() {
    
// Redirect to the "contactus.html" file
    window.location.href = "contactus.html";
});