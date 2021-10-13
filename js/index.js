define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        $("#edituser").click(function () {
            $('#labelrut2').empty();
            $("#labelrut").after('<input id="idrut" type="text" class="form-control input-student" placeholder="RUT" aria-label="RUT" required >');
            $('#labeltelefono2').empty();
            $("#labeltelefono").after('<input id="idtelefono" type="tel" class="form-control input-student" placeholder="Telefono" aria-label="Telefono" required pattern="[0-9]{9}">');
            $('#labelcorreo2').empty();
            $("#labelcorreo").after('<input id="idcorreo" type="email" class="form-control input-student" placeholder="Correo" aria-label="Correo" required>');
            $('#labelacudiente2').empty();
            $("#labelacudiente").after('<input id="idacudiente" type="text" class="form-control input-student" placeholder="Acudiente" aria-label="Acudiente" required>');
            $('#labeldate2').empty();
            $("#labeldate").after('<input id="idnacimiento" type="date" id="start" name="trip-start"  class="form-control input-student" required>');
            $('#labelregion2').empty();
            $("#labelregion").after('<select id="idregion" class="form-select input-student" aria-label="Región" required><option selected>Seleccione</option><option value="Coquimbo">Coquimbo</option><option value="Valparaiso">Valparaíso</option></select>');
            $('#labelcomuna2').empty();
            $("#labelcomuna").after('<select id="idcomuna" class="form-select input-student" aria-label="Región" required><option selected>Seleccione</option><option value="La Serena">La Serena</option><option value="Coquimbo">Coquimbo</option></select>');
            $('#labeldireccion2').empty();
            $("#labeldireccion").after('<input id="iddireccion" type="text" class="form-control input-student" placeholder="Dirección" aria-label="Dirección" required>');
            $('#labelcurso2').empty();
            $("#labelcurso").after('<input id="idcurso" type="text" class="form-control input-student" placeholder="Curso" aria-label="Curso" required>');
            $('#actualizaruser').removeClass('d-none');
        });
        $(".asinature-row").click(function () {
            $(this).remove();
        });
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                $('.input-student').hide();
                localStorage.rut = $('#idrut').val();
                localStorage.telefono = $('#idtelefono').val();
                localStorage.correo = $('#idcorreo').val();
                localStorage.acudiente = $('#idacudiente').val();
                localStorage.nacimiento = $('#idnacimiento').val();
                localStorage.region = $('#idregion').val();
                localStorage.comuna = $('#idcomuna').val();
                localStorage.direccion = $('#iddireccion').val();
                localStorage.curso = $('#idcurso').val();
                $("#labelrut2").text("" + localStorage.rut);
                $("#labeltelefono2").text("" + localStorage.telefono);
                $("#labelcorreo2").text("" + localStorage.correo);
                $("#labelemail2").text("" + localStorage.email);
                $("#labelacudiente2").text("" + localStorage.acudiente);
                $("#labeldate2").text("" + localStorage.nacimiento);
                $("#labelregion2").text("" + localStorage.region);
                $("#labelcomuna2").text("" + localStorage.comuna);
                $("#labeldireccion2").text("" + localStorage.direccion);
                $("#labelcurso2").text("" + localStorage.curso);
            }, false);
        });
    })();
});
