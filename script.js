document.getElementById('btnSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light')
       document.getElementById('lightToggle').style.display = "none";
       document.getElementById('darkToggle').style.display = "inline";
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
        document.getElementById('lightToggle').style.display = "inline";
        document.getElementById('darkToggle').style.display = "none";
    }
})

// broken dunno why, figure out what you're clicking on
// document.getElementbyId('sortDefault').addEventListener('click',()=>{
//     console.log(document.getElementById('sortByText').innerHTML)
//     console.log(document.getElementById('sortDefault').innerHTML)
//     document.getElementById('sortByText').innerHTML = "Default";
// })