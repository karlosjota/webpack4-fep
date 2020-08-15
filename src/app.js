import { showAlert } from './messages';
import $ from 'jquery';
import uuid from 'uuid/v4';

import "./style.scss";

alert('webpack-serer funcionando!!')

document.getElementById('btn-alert').addEventListener('click', showAlert);

// selecciona el elemento con ide btn-jq, y del eveto click, crea una función
$('#btn-jq').click(() => alert(uuid()));