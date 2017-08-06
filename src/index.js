import _ from 'lodash';
import './style.scss';
import bgc from './evil.png';

function component(){
    var element = document.createElement('div');

    // Lodash，现在由此脚本导入
    element.innerHTML = _.join(['webpack','fuck use'],' ');
    element.classList.add('hi');

    return element;
}

document.body.appendChild(component());