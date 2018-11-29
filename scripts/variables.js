$(document).ready(function() {
    var replaced = $("body").html().replace('{$date}', (new Date()).getFullYear());
    test(replaced);
});

function test(text) {
    $("body").html(text);
}