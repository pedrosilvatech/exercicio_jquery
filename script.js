$(document).ready(function() {
    $('#lista-tarefas').on('submit', function(e) {
        e.preventDefault();

        
        const task = $('#tarefa').val();

        
        $('#lista').append('<li><span>' + task + '</span></li>');


        $('#tarefa').val('');
    });


    $('#lista').on('click', 'li', function(e) {
        if (!$(e.target).is('button')) {
            $(this).find('span').toggleClass('line-through');
        }
    });


    $('#clear-tasks').on('click', function() {
        $('#lista').empty();
    });
});