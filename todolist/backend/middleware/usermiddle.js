
function signupmiddle()
{
    console.log("reached on signup middleware");
}
function signinmiddle()
{
    console.log("reached on signin middleware");
}

module.exports = { signinmiddle,signupmiddle};