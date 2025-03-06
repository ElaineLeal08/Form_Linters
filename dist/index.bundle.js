"use strict";
(self["webpackChunkformulario_sena"] = self["webpackChunkformulario_sena"] || []).push([["index"],{

/***/ "./src/js/modules/FormHandler.js":
/*!***************************************!*\
  !*** ./src/js/modules/FormHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupFormHandler)
/* harmony export */ });
function setupFormHandler() {
  const form = document.getElementById('survey-form');
  const messageContainer = document.getElementById('message-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('number').value;
    const dropdown = document.getElementById('dropdown').value;
    const radioButtons = document.querySelectorAll(
      'input[name="choice"] : checked',
    );
    const checkboxes = document.querySelectorAll(
      'type[name="checkbox"] : checked',
    );
    const comments = document.getElementById('comments').value;

    if (
      name
      && email
      && age
      && dropdown
      && radioButtons.length > 0
      && checkboxes.length > 0
      && comments
    ) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON EXITO';
      messageContainer.style.color = 'green'; // estilo para el mensaje de exito
      form.reset(); // opcional resetea el formulario despues de enviarlo
    } else {
      messageContainer.textContent = 'Por favor, complete todos los campos requeridos.';
      messageContainer.style.color = 'red'; // estilo para el mensaje de error
    }
  });
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_FormHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/FormHandler.js */ "./src/js/modules/FormHandler.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_js_modules_FormHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // configurar el listener del formulario
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLG9CQUFvQjtBQUNwQixNQUFNO0FBQ047QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNwQzJEOztBQUUzRDtBQUNBLEVBQUUsc0VBQWdCLElBQUk7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm11bGFyaW8tc2VuYS8uL3NyYy9qcy9tb2R1bGVzL0Zvcm1IYW5kbGVyLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8tc2VuYS8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwRm9ybUhhbmRsZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VydmV5LWZvcm0nKTtcbiAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWNvbnRhaW5lcicpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWU7XG4gICAgY29uc3QgYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlcicpLnZhbHVlO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duJykudmFsdWU7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdpbnB1dFtuYW1lPVwiY2hvaWNlXCJdIDogY2hlY2tlZCcsXG4gICAgKTtcbiAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICd0eXBlW25hbWU9XCJjaGVja2JveFwiXSA6IGNoZWNrZWQnLFxuICAgICk7XG4gICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMnKS52YWx1ZTtcblxuICAgIGlmIChcbiAgICAgIG5hbWVcbiAgICAgICYmIGVtYWlsXG4gICAgICAmJiBhZ2VcbiAgICAgICYmIGRyb3Bkb3duXG4gICAgICAmJiByYWRpb0J1dHRvbnMubGVuZ3RoID4gMFxuICAgICAgJiYgY2hlY2tib3hlcy5sZW5ndGggPiAwXG4gICAgICAmJiBjb21tZW50c1xuICAgICkge1xuICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdGT1JNVUxBUklPIEVOVklBRE8gQ09OIEVYSVRPJztcbiAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUuY29sb3IgPSAnZ3JlZW4nOyAvLyBlc3RpbG8gcGFyYSBlbCBtZW5zYWplIGRlIGV4aXRvXG4gICAgICBmb3JtLnJlc2V0KCk7IC8vIG9wY2lvbmFsIHJlc2V0ZWEgZWwgZm9ybXVsYXJpbyBkZXNwdWVzIGRlIGVudmlhcmxvXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSAnUG9yIGZhdm9yLCBjb21wbGV0ZSB0b2RvcyBsb3MgY2FtcG9zIHJlcXVlcmlkb3MuJztcbiAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUuY29sb3IgPSAncmVkJzsgLy8gZXN0aWxvIHBhcmEgZWwgbWVuc2FqZSBkZSBlcnJvclxuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgc2V0dXBGb3JtSGFuZGxlciBmcm9tICcuL2pzL21vZHVsZXMvRm9ybUhhbmRsZXIuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBzZXR1cEZvcm1IYW5kbGVyKCk7IC8vIGNvbmZpZ3VyYXIgZWwgbGlzdGVuZXIgZGVsIGZvcm11bGFyaW9cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==