(function (window, document, $) {

    var GSP = function () {

        function dispose() {

        }

        function variaveisIniciar() {

        }

        function eventosIniciar() {

        }

        function iniciarPrivado() {
            variaveisIniciar();

            eventosIniciar();
        }

        this.disposePublico = function () {
            dispose();
        };

        this.iniciarPublico = function () {
            iniciarPrivado();
        };
    };
    window.GSP = new GSP();
    window.GSP.iniciarPublico();
}(window, document, jQuery));