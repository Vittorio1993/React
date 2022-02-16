import _ from 'loadsh'
function component() {
    var div = document.createElement('div');
    div.innerHTML = _.join(['hello', 'webpack'])
    return div;
}

var el = component();
document.body.appendChild(el);

